# Install

## Requirements

- Your own server (VPS or dedicated server)
- Ubuntu 22.04 or Ubuntu 24.04
- Root or sudo access
- A domain name pointing to your server (recommended, for TLS)

## Steps

1. Update the server packages:

   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. Download the latest release binary from the
   [Releases](../../releases) page of this repository.

3. Place the binary in the install directory and make it executable:

   ```bash
   sudo install -m 755 cleanpanel /usr/local/bin/cleanpanel
   ```

   Adjust the path if your install directory is different.

4. Start the panel service:

   ```bash
   sudo systemctl start cleanpanel
   sudo systemctl enable cleanpanel
   ```

5. Open the web dashboard in your browser and log in with the admin
   credentials shown on first run.

6. Change the default admin credentials immediately after the first login.

## After Installation

- Set up TLS (HTTPS) for the dashboard.
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
