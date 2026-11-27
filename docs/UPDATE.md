# Update

This page explains how updates work for CleanPanel.

## How Updates Work

1. Check the [Releases](../../releases) page of this repository for the
   latest version.
2. Compare it with the version shown in your dashboard.
3. If a newer version is available, download the new release tarball
   (`cleanpanel-<version>-linux-amd64.tar.gz`). It contains the `cleanpanel`
   binary, the `web/` dashboard files and a `VERSION` file.
4. Stop the panel service.
5. Back up the current install directory.
6. Extract the tarball over the install directory.
7. Start the panel service again.
8. Verify the new version in the dashboard.

## Step by Step

```bash
# 1. Stop the service
sudo systemctl stop cleanpanel

# 2. Back up the current install
sudo cp -a /opt/cleanpanel /opt/cleanpanel.bak

# 3. Extract the new release tarball over the install directory
sudo tar -xzf cleanpanel-1.0.30-linux-amd64.tar.gz -C /opt/cleanpanel
sudo chmod 755 /opt/cleanpanel/cleanpanel

# 4. Start the service
sudo systemctl start cleanpanel

# 5. Check the service status
sudo systemctl status cleanpanel
```

Replace the tarball file name with the version you downloaded. Adjust the
install path if your install directory is different.

## Helper Script

`update.sh` in the repository root automates the steps above: it finds the
latest release, downloads the tarball, backs up the current install,
extracts the new version and restarts the service. Edit the variables at
the top of the script to match your install path before running it.

## Version Check

After updating, open the dashboard and check that the displayed version
matches the release you installed. If it does not, restart the service once
more and check again.

## Rollback

If the new version does not work, roll back to the previous install:

```bash
sudo systemctl stop cleanpanel
sudo rm -rf /opt/cleanpanel && sudo mv /opt/cleanpanel.bak /opt/cleanpanel
sudo systemctl start cleanpanel
```

Keep the previous install (`.bak`) until you have confirmed the new version
works.
