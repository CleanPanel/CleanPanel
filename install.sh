#!/usr/bin/env bash
# CleanPanel — one-command installer / updater
#
#   Fresh install :  curl -fsSL https://raw.githubusercontent.com/CleanPanel/CleanPanel/main/install.sh | sudo bash
#   With a domain :  curl -fsSL https://raw.githubusercontent.com/CleanPanel/CleanPanel/main/install.sh | sudo DOMAIN=panel.example.com bash
#   Custom port   :  curl -fsSL https://raw.githubusercontent.com/CleanPanel/CleanPanel/main/install.sh | sudo PANEL_PORT=8443 bash
#   Update        :  just run it again on an existing install — ALL state
#                    (settings, exits, users, password, tokens, certs) is
#                    preserved; only code and systemd units are upgraded.
#
# What it sets up: the CleanPanel binary + web dashboard in /opt/cleanpanel,
# Xray and sing-box cores, nginx as the public HTTPS entry, systemd units
# (cleanpanel, cpxray, cpsocks, cp-tunnel@N), and TLS — a free Let's Encrypt
# certificate when a domain points at the server and port 80 is free,
# otherwise a self-signed certificate.
#
# Run as root or with sudo. Ubuntu 22.04 / 24.04.

set -euo pipefail

REPO="CleanPanel/CleanPanel"
XRAY_VER="26.11.9"
SINGBOX_VER="1.14.4"
CONF_DIR="/etc/cleanpanel"
APP_DIR="/opt/cleanpanel"
DOMAIN="${DOMAIN:-}"
PANEL_PORT="${PANEL_PORT:-}"

say()  { printf '\n== %s ==\n' "$*"; }
info() { printf '  %s\n' "$*"; }
warn() { printf '  !! %s\n' "$*" >&2; }
die()  { printf '\nERROR: %s\n' "$*" >&2; exit 1; }

port_taken() { ss -tln 2>/dev/null | grep -qE "[:.]$1[[:space:]]"; }

server_ip() {
    curl -s -m 10 https://api.ipify.org 2>/dev/null || \
    curl -s -m 10 https://icanhazip.com 2>/dev/null || \
    hostname -I 2>/dev/null | awk '{print $1}'
}

# ---------------------------------------------------------------- preflight --
[ "$(id -u)" = "0" ] || die "Run as root:  sudo bash install.sh"
[ -f /etc/os-release ] || die "Cannot detect the OS (/etc/os-release missing)."
# shellcheck disable=SC1091
. /etc/os-release
[ "${ID:-}" = "ubuntu" ] || die "This installer targets Ubuntu (detected: ${ID:-unknown})."
case "${VERSION_ID:-}" in
    22.04|24.04) info "Ubuntu $VERSION_ID — OK" ;;
    *) warn "Ubuntu ${VERSION_ID:-?} is untested (22.04 / 24.04 recommended) — continuing." ;;
esac

UPDATE=0
[ -f "$CONF_DIR/settings.json" ] && UPDATE=1
if [ "$UPDATE" = "1" ]; then
    say "UPDATE MODE — existing install detected"
    info "Settings, exits, users, password and certs in $CONF_DIR are preserved."
else
    say "FRESH INSTALL"
fi

# Panel port: env > existing settings (update) > 443 if free > 10443.
if [ -z "$PANEL_PORT" ] && [ "$UPDATE" = "1" ]; then
    PANEL_PORT="$(python3 -c "import json;print(json.load(open('$CONF_DIR/settings.json')).get('web_port',443))" 2>/dev/null || echo 443)"
fi
if [ -z "$PANEL_PORT" ]; then
    if port_taken 443; then PANEL_PORT=10443; else PANEL_PORT=443; fi
fi
info "Panel port: $PANEL_PORT"
for p in 80 443 10443; do
    if port_taken "$p"; then info "Port $p is already in use on this box."; fi
done

# Domain prompt (interactive fresh installs only).
if [ "$UPDATE" = "0" ] && [ -z "$DOMAIN" ] && [ -t 0 ]; then
    printf '  Domain for the panel (blank = use the server IP): '
    read -r DOMAIN || DOMAIN=""
fi
SERVER_IP="$(server_ip || true)"
info "Server public IP: ${SERVER_IP:-unknown}"

# ------------------------------------------------------------------- swap ----
if ! swapon --show 2>/dev/null | grep -q .; then
    MEM_KB="$(awk '/^MemTotal:/{print $2}' /proc/meminfo)"
    if [ "${MEM_KB:-0}" -lt 2097152 ]; then
        say "Creating a 2GB swapfile (RAM < 2GB)"
        fallocate -l 2G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=2048
        chmod 600 /swapfile
        mkswap /swapfile >/dev/null
        swapon /swapfile
        grep -q '^/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
    fi
fi

# -------------------------------------------------------------------- apt ----
say "Installing packages"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq openvpn nginx curl ca-certificates unzip tar python3 \
    openssl iproute2 >/dev/null
info "openvpn, nginx, python3 and helpers installed."

# --------------------------------------------------------------- binaries ----
ARCH="$(uname -m)"
case "$ARCH" in
    x86_64)  XRAY_ASSET="Xray-linux-64.zip";          SB_ASSET="sing-box-${SINGBOX_VER}-linux-amd64.tar.gz" ;;
    aarch64) XRAY_ASSET="Xray-linux-arm64-v8a.zip";   SB_ASSET="sing-box-${SINGBOX_VER}-linux-arm64.tar.gz" ;;
    *) die "Unsupported architecture: $ARCH" ;;
esac

dl() { curl -fL --retry 2 -o "$2" "$1"; }

if ! xray version 2>/dev/null | grep -q "Xray $XRAY_VER"; then
    say "Installing Xray v$XRAY_VER"
    TMPD="$(mktemp -d)"
    if ! dl "https://github.com/XTLS/Xray-core/releases/download/v${XRAY_VER}/${XRAY_ASSET}" "$TMPD/xray.zip"; then
        warn "Pinned Xray v$XRAY_VER download failed — falling back to the latest release."
        URL="$(curl -s https://api.github.com/repos/XTLS/Xray-core/releases/latest \
               | grep -o "https://[^\"]*/${XRAY_ASSET}" | head -1)"
        [ -n "$URL" ] || die "Could not resolve an Xray download URL."
        dl "$URL" "$TMPD/xray.zip"
    fi
    unzip -o -q "$TMPD/xray.zip" -d "$TMPD/xray"
    install -m 0755 "$TMPD/xray/xray" /usr/local/bin/xray
    rm -rf "$TMPD"
fi
info "Xray: $(xray version 2>/dev/null | head -1)"

if ! sing-box version 2>/dev/null | grep -q "sing-box version $SINGBOX_VER"; then
    say "Installing sing-box v$SINGBOX_VER"
    TMPD="$(mktemp -d)"
    if ! dl "https://github.com/SagerNet/sing-box/releases/download/v${SINGBOX_VER}/${SB_ASSET}" "$TMPD/sb.tar.gz"; then
        warn "Pinned sing-box v$SINGBOX_VER download failed — falling back to the latest release."
        URL="$(curl -s https://api.github.com/repos/SagerNet/sing-box/releases/latest \
               | grep -o "https://[^\"]*/sing-box-[^\"]*-linux-[^\"]*\.tar\.gz" | head -1)"
        [ -n "$URL" ] || die "Could not resolve a sing-box download URL."
        dl "$URL" "$TMPD/sb.tar.gz"
    fi
    tar -xzf "$TMPD/sb.tar.gz" -C "$TMPD"
    install -m 0755 "$(find "$TMPD" -name sing-box -type f | head -1)" /usr/local/bin/sing-box
    rm -rf "$TMPD"
fi
info "sing-box: $(sing-box version 2>/dev/null | head -1)"

if [ ! -x "$HOME/.acme.sh/acme.sh" ]; then
    say "Installing acme.sh"
    curl -s https://get.acme.sh | sh -s "email=admin@${DOMAIN:-localhost}" >/dev/null 2>&1 || \
        warn "acme.sh install failed — TLS auto-renewal will need a manual setup."
fi

# ------------------------------------------------------------ panel release ---
say "Downloading the latest CleanPanel release"
TMPD="$(mktemp -d)"
trap 'rm -rf "${TMPD:-}"' EXIT
DL_URL="$(curl -fsSL "https://api.github.com/repos/${REPO}/releases/latest" \
    | grep -o '"browser_download_url": *"[^"]*linux-amd64\.tar\.gz"' | head -n 1 | cut -d '"' -f 4)"
[ -n "$DL_URL" ] || die "Could not find a linux-amd64 release asset."
dl "$DL_URL" "$TMPD/cleanpanel.tar.gz"

say "Deploying panel code"
mkdir -p "$APP_DIR"
if [ "$UPDATE" = "1" ]; then
    cp -a "$APP_DIR" "$APP_DIR.pre-update.bak" 2>/dev/null || true
fi
tar -xzf "$TMPD/cleanpanel.tar.gz" -C "$APP_DIR"
chmod 755 "$APP_DIR/cleanpanel"
mkdir -p "$CONF_DIR/tunnels" "$CONF_DIR/backups" "$CONF_DIR/tls"

# Tunnel up-script: per-tunnel policy routing for exit tunnels.
cat > "$CONF_DIR/up.sh" <<'UP_EOF'
#!/bin/sh
# $dev is set by openvpn; tunnel index comes from the dev name cptunN.
# Per-tunnel policy routing: a dedicated table whose default route is
# this tunnel, selected by oif.
N=${dev#cptun}; T=$((400 + N))
ip route replace default dev "$dev" table $T
ip rule del oif "$dev" table $T 2>/dev/null
ip rule add oif "$dev" table $T priority $((2000 + N))
exit 0
UP_EOF
cp "$CONF_DIR/up.sh" "$APP_DIR/up.sh"
chmod +x "$CONF_DIR/up.sh" "$APP_DIR/up.sh"

# ----------------------------------------------------------------- units -----
cat > /etc/systemd/system/cleanpanel.service <<'UNIT_EOF'
[Unit]
Description=CleanPanel (web app + guard)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=/opt/cleanpanel/cleanpanel
WorkingDirectory=/opt/cleanpanel
Restart=on-failure
RestartSec=3

[Install]
WantedBy=multi-user.target
UNIT_EOF

cat > /etc/systemd/system/cpxray.service <<'UNIT_EOF'
[Unit]
Description=CleanPanel Xray core
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=/usr/local/bin/xray run -config /etc/cleanpanel/xray.json
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
UNIT_EOF

cat > /etc/systemd/system/cpsocks.service <<'UNIT_EOF'
[Unit]
Description=CleanPanel sing-box socks bridge (per-tunnel SOCKS)
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=/usr/local/bin/sing-box run -c /etc/cleanpanel/singbox.json
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
UNIT_EOF

cat > /etc/systemd/system/cp-tunnel@.service <<'UNIT_EOF'
[Unit]
Description=CleanPanel exit tunnel %i
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=/usr/sbin/openvpn --config /etc/cleanpanel/tunnels/%i.ovpn --dev cptun%i --dev-type tun --route-nopull --pull-filter ignore redirect-gateway --pull-filter ignore dhcp-option --script-security 2 --up /etc/cleanpanel/up.sh --auth-user-pass /etc/cleanpanel/vpn_auth.txt --connect-retry 5 30 --ping 10 --ping-restart 60 --verb 2
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
UNIT_EOF
systemctl daemon-reload
info "Code in $APP_DIR, units installed."

BASEPATH=""
if [ "$UPDATE" = "0" ]; then
    # ------------------------------------------------------------ fresh state --
    say "Starting the panel for the first time"
    systemctl enable cleanpanel cpxray cpsocks nginx >/dev/null 2>&1 || true
    systemctl start cleanpanel
    # The panel creates its initial state (settings, base path) on first run.
    for _ in $(seq 1 15); do
        [ -f "$CONF_DIR/settings.json" ] && break
        sleep 2
    done
    if [ ! -f "$CONF_DIR/settings.json" ]; then
        die "The panel did not create $CONF_DIR/settings.json — check: journalctl -u cleanpanel -n 50"
    fi
    python3 - "$DOMAIN" "$SERVER_IP" "$PANEL_PORT" <<'PYEOF'
import json, sys, os
domain, ip, port = sys.argv[1], sys.argv[2], int(sys.argv[3])
p = "/etc/cleanpanel/settings.json"
s = json.load(open(p))
s["panel_host"] = domain or ip
s["web_port"] = port
tmp = p + ".tmp"
json.dump(s, open(tmp, "w"), ensure_ascii=False, indent=1)
os.chmod(tmp, 0o600)
os.replace(tmp, p)
print(s["basepath"])
PYEOF
    BASEPATH="$(python3 -c "import json;print(json.load(open('$CONF_DIR/settings.json'))['basepath'])")"

    # ------------------------------------------------------------------- TLS --
    CERT_DONE=0
    if [ -n "$DOMAIN" ]; then
        say "TLS for $DOMAIN"
        RESOLVES=0
        if [ -n "$SERVER_IP" ] && python3 -c "
import socket, sys
try:
    ips = {x[4][0] for x in socket.getaddrinfo('$DOMAIN', None)}
except Exception:
    ips = set()
sys.exit(0 if '$SERVER_IP' in ips else 1)
"; then RESOLVES=1; fi
        ACME="$HOME/.acme.sh/acme.sh"
        if [ "$RESOLVES" = "1" ] && ! port_taken 80 && [ -x "$ACME" ]; then
            info "Domain resolves here and port 80 is free — trying Let's Encrypt (HTTP-01)."
            if "$ACME" --issue -d "$DOMAIN" --standalone \
                    --accountemail "admin@$DOMAIN" --server letsencrypt; then
                "$ACME" --install-cert -d "$DOMAIN" --ecc \
                    --fullchain-file "$CONF_DIR/tls/fullchain.pem" \
                    --key-file "$CONF_DIR/tls/privkey.pem" \
                    --reloadcmd "systemctl reload nginx || true" && CERT_DONE=1
            fi
        fi
        if [ "$CERT_DONE" != "1" ]; then
            warn "Automatic certificate issuance was not possible (DNS not pointing"
            warn "here yet, or port 80 busy). The panel starts on a self-signed"
            warn "certificate; for a real one, run these two steps yourself:"
            printf '    %s --issue -d %s --dns dns_manual --accountemail admin@%s\n' "$ACME" "$DOMAIN" "$DOMAIN"
            printf '    # add the TXT record it prints in your DNS panel, then:\n'
            printf '    %s --renew -d %s --dns dns_manual --ecc\n' "$ACME" "$DOMAIN"
            printf '    %s --install-cert -d %s --ecc --fullchain-file %s/tls/fullchain.pem --key-file %s/tls/privkey.pem --reloadcmd "systemctl reload nginx"\n' "$ACME" "$DOMAIN" "$CONF_DIR" "$CONF_DIR"
        fi
    fi
    if [ "$CERT_DONE" != "1" ] && [ ! -f "$CONF_DIR/tls/fullchain.pem" ]; then
        say "Generating a self-signed certificate"
        CN="${DOMAIN:-$SERVER_IP}"
        SAN="DNS:$CN"
        [ -n "$SERVER_IP" ] && SAN="$SAN,IP:$SERVER_IP"
        openssl req -x509 -newkey rsa:2048 -nodes -days 825 \
            -keyout "$CONF_DIR/tls/privkey.pem" -out "$CONF_DIR/tls/fullchain.pem" \
            -subj "/CN=$CN" -addext "subjectAltName=$SAN" 2>/dev/null
        chmod 600 "$CONF_DIR/tls/privkey.pem"
    fi

    # ----------------------------------------------------------------- nginx --
    say "Configuring nginx"
    cat > /etc/nginx/sites-available/cleanpanel <<NGINX_EOF
# CleanPanel — public entry.
# Only the base path and /sub/ are exposed; everything else is 404.
server {
    listen ${PANEL_PORT} ssl;
    listen [::]:${PANEL_PORT} ssl;
    server_name ${DOMAIN:-_};

    ssl_certificate /etc/cleanpanel/tls/fullchain.pem;
    ssl_certificate_key /etc/cleanpanel/tls/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;

    location / {
        return 404;
    }

    location /${BASEPATH}/ {
        proxy_pass http://127.0.0.1:8891;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-Proto https;
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }

    location /sub/ {
        proxy_pass http://127.0.0.1:8891;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-Proto https;
        proxy_read_timeout 60s;
    }
}
NGINX_EOF
    ln -sf /etc/nginx/sites-available/cleanpanel /etc/nginx/sites-enabled/cleanpanel
    nginx -t
else
    BASEPATH="$(python3 -c "import json;print(json.load(open('$CONF_DIR/settings.json'))['basepath'])")"
    EXISTING_HOST="$(python3 -c "import json;print(json.load(open('$CONF_DIR/settings.json')).get('panel_host',''))")"
    [ -z "$DOMAIN" ] && DOMAIN="$EXISTING_HOST"
    info "Update mode: nginx site, settings and certs left exactly as they are."
fi

# ---------------------------------------------------------------- services ---
say "(Re)starting services"
systemctl enable cleanpanel cpxray cpsocks nginx >/dev/null 2>&1 || true
if [ "$UPDATE" = "0" ]; then systemctl reload nginx 2>/dev/null || systemctl start nginx; fi
systemctl restart cpsocks cpxray cleanpanel || true

HOST_FOR_URL="${DOMAIN:-$SERVER_IP}"
URL="https://$HOST_FOR_URL"
[ "$PANEL_PORT" != "443" ] && URL="$URL:$PANEL_PORT"
URL="$URL/$BASEPATH/"

say "Health check"
OK=0
for _ in $(seq 1 12); do
    if curl -sk -o /dev/null -w '%{http_code}' "$URL" 2>/dev/null | grep -q 200; then OK=1; break; fi
    sleep 2
done
[ "$OK" = "1" ] && info "Panel answers 200 at $URL" || warn "Panel did not answer yet — check: journalctl -u cleanpanel -n 50"

# ----------------------------------------------------------------- summary ---
cat <<EOF

================================================================================
  CleanPanel — $([ "$UPDATE" = "1" ] && echo "updated" || echo "installed")
--------------------------------------------------------------------------------
  Panel URL   : $URL
  First visit : $([ "$UPDATE" = "1" ] && echo "— (update: your password is unchanged)" || echo "the setup page — YOU choose the admin password there.")
  API token   : stored in $CONF_DIR/settings.json (field "api_token")
  Services    : cleanpanel, cpxray, cpsocks, cp-tunnel@N (per-exit tunnels), nginx
  Config/data : $CONF_DIR   Code: $APP_DIR

  Open these ports in your firewall / cloud panel:
    - $PANEL_PORT/tcp          the panel itself
    - 80/tcp                   Let's Encrypt HTTP-01 + renewals (if you use a domain)
    - 10000-60000 TCP+UDP      Xray inbound ports for exits
================================================================================
EOF
