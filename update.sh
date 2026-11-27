#!/usr/bin/env bash
# CleanPanel update script.
# Downloads the latest release tarball from
# github.com/CleanPanel/CleanPanel/releases, backs up the current install,
# replaces it and restarts the cleanpanel service.
#
# The release asset is a tarball named
# cleanpanel-<version>-linux-amd64.tar.gz containing the cleanpanel binary,
# the web/ dashboard files and a VERSION file.
# Edit the variables below to match your setup before running this script.
# Run as root or with sudo.

set -euo pipefail

# --- Settings (edit these) ---
INSTALL_DIR="/opt/cleanpanel"
BINARY_PATH="${INSTALL_DIR}/cleanpanel"
SERVICE_NAME="cleanpanel"
REPO="CleanPanel/CleanPanel"
# ------------------------------

echo "Stopping ${SERVICE_NAME}..."
systemctl stop "${SERVICE_NAME}"

echo "Backing up current install to ${INSTALL_DIR}.bak..."
rm -rf "${INSTALL_DIR}.bak"
cp -a "${INSTALL_DIR}" "${INSTALL_DIR}.bak"

echo "Finding the latest release..."
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "${TMP_DIR}"' EXIT
DOWNLOAD_URL="$(curl -fsSL "https://api.github.com/repos/${REPO}/releases/latest" | grep -o '"browser_download_url": *"[^"]*linux-amd64\.tar\.gz"' | head -n 1 | cut -d '"' -f 4)"
if [ -z "${DOWNLOAD_URL}" ]; then
  echo "Could not find a linux-amd64 release asset. Restoring backup..."
  rm -rf "${INSTALL_DIR}"
  mv "${INSTALL_DIR}.bak" "${INSTALL_DIR}"
  systemctl start "${SERVICE_NAME}" || true
  exit 1
fi

echo "Downloading ${DOWNLOAD_URL}..."
curl -fL -o "${TMP_DIR}/cleanpanel.tar.gz" "${DOWNLOAD_URL}"

echo "Installing new version..."
tar -xzf "${TMP_DIR}/cleanpanel.tar.gz" -C "${INSTALL_DIR}"
chmod 755 "${BINARY_PATH}"

echo "Starting ${SERVICE_NAME}..."
systemctl start "${SERVICE_NAME}"
systemctl status "${SERVICE_NAME}" --no-pager || true

echo "Update complete. Verify the version in the dashboard."
echo "If the new version does not work, restore the backup:"
echo "  systemctl stop ${SERVICE_NAME}"
echo "  rm -rf ${INSTALL_DIR} && mv ${INSTALL_DIR}.bak ${INSTALL_DIR}"
echo "  systemctl start ${SERVICE_NAME}"
