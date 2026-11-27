# Install

## Requirements

- Your own server (VPS or dedicated server)
- Ubuntu 22.04 or Ubuntu 24.04
- Root or sudo access
- A domain name pointing to your server (recommended, for TLS)

## One-line install

```bash
curl -fsSL https://raw.githubusercontent.com/CleanPanel/CleanPanel/main/install.sh | sudo bash
```

With a domain (enables a free Let's Encrypt certificate when the domain
points at the server and port 80 is free):

```bash
curl -fsSL https://raw.githubusercontent.com/CleanPanel/CleanPanel/main/install.sh | sudo DOMAIN=panel.example.com bash
```

With a custom panel port:

```bash
curl -fsSL https://raw.githubusercontent.com/CleanPanel/CleanPanel/main/install.sh | sudo PANEL_PORT=8443 bash
```

The installer sets up everything: the CleanPanel binary and web dashboard
in `/opt/cleanpanel`, Xray and sing-box cores, nginx as the public HTTPS
entry, the systemd services (`cleanpanel`, `cpxray`, `cpsocks`,
`cp-tunnel@N`), and TLS — a Let's Encrypt certificate when possible,
otherwise a self-signed certificate. Running it again on an existing
install updates the panel and keeps all settings, users and data.

When it finishes, it prints the panel URL. On first visit, the setup page
asks you to choose the admin password.

Open these ports in your firewall / cloud panel:

- Panel port (`443` if free, otherwise `10443`) / TCP — the panel itself
- `80`/TCP — Let's Encrypt HTTP-01 and renewals (if you use a domain)
- `10000-60000` TCP+UDP — Xray inbound ports for exits

## Manual install

If you prefer to install by hand:

1. Update the server packages:

   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. Download the latest release tarball (`cleanpanel-<version>-linux-amd64.tar.gz`)
   from the [Releases](../../releases) page of this repository.

3. Extract it into the install directory:

   ```bash
   sudo mkdir -p /opt/cleanpanel
   sudo tar -xzf cleanpanel-1.0.30-linux-amd64.tar.gz -C /opt/cleanpanel
   sudo chmod 755 /opt/cleanpanel/cleanpanel
   ```

   Replace the tarball file name with the version you downloaded.

4. Install Xray and sing-box (see `install.sh` in the repository root for
   the pinned versions and download URLs) and create the systemd units —
   the simplest way is to run `install.sh`, which does these steps for you.

5. Start and enable the panel service:

   ```bash
   sudo systemctl start cleanpanel
   sudo systemctl enable cleanpanel
   ```

6. Open the web dashboard in your browser and set the admin password on
   the setup page.

7. Change the default admin credentials immediately after the first login.

## After Installation

- Set up TLS (HTTPS) for the dashboard (the one-line installer does this).
- Create your first user and inbound from the dashboard.
- Keep a backup of your panel data and settings.

## Troubleshooting

- If the dashboard does not open, check the service status:

  ```bash
  sudo systemctl status cleanpanel
  ```

- If the service fails to start, check the logs:

  ```bash
  sudo journalctl -u cleanpanel -n 100
  ```
