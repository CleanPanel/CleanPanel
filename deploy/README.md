# Deploy files

The files the installer writes on the server, published for review. They
are the exact files `install.sh` installs.

- `systemd/cleanpanel.service` — runs the panel binary
  (`/opt/cleanpanel/cleanpanel`).
- `systemd/cpxray.service` — runs the Xray core.
- `systemd/cpsocks.service` — runs the sing-box SOCKS bridge.
- `systemd/cp-tunnel@.service` — one OpenVPN tunnel per exit.
- `nginx/cleanpanel.conf.tmpl` — nginx site template. `install.sh`
  renders it with the panel port, server name and base path
  (`__PANEL_PORT__`, `__SERVER_NAME__`, `__BASEPATH__`). Only the base
  path and `/sub/` are exposed; everything else returns 404.
- `up.sh` — per-tunnel policy routing script used by `cp-tunnel@.service`.
