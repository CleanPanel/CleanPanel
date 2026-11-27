# Update

This page explains how updates work for CleanPanel.

## How Updates Work

1. Check the [Releases](../../releases) page of this repository for the
   latest version.
2. Compare it with the version shown in your dashboard.
3. If a newer version is available, download the new release binary.
4. Stop the panel service.
5. Back up the current binary.
6. Replace the binary with the new one.
7. Start the panel service again.
8. Verify the new version in the dashboard.

## Step by Step

```bash
# 1. Stop the service
sudo systemctl stop cleanpanel

# 2. Back up the current binary
sudo cp /usr/local/bin/cleanpanel /usr/local/bin/cleanpanel.bak

# 3. Replace the binary with the new release binary
sudo install -m 755 cleanpanel /usr/local/bin/cleanpanel

# 4. Start the service
sudo systemctl start cleanpanel

# 5. Check the service status
sudo systemctl status cleanpanel
```

Adjust the install path if your install directory is different.

## Helper Script

`update.sh` in the repository root automates the steps above: it downloads
the latest release binary, backs up the current binary, replaces it and
restarts the service. Edit the variables at the top of the script to match
your install path before running it.

## Version Check

After updating, open the dashboard and check that the displayed version
matches the release you installed. If it does not, restart the service once
more and check again.

## Rollback

If the new version does not work, roll back to the previous binary:

```bash
sudo systemctl stop cleanpanel
sudo cp /usr/local/bin/cleanpanel.bak /usr/local/bin/cleanpanel
sudo systemctl start cleanpanel
```

Keep the previous binary (`.bak`) until you have confirmed the new version
works.
