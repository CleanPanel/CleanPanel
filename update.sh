#!/usr/bin/env bash
# CleanPanel update script.
# Downloads the latest release binary from
# github.com/CleanPanel/CleanPanel/releases, backs up the current binary,
# replaces it and restarts the cleanpanel service.
#
# Edit the variables below to match your setup before running this script.
# Run as root or with sudo.

set -euo pipefail

# --- Settings (edit these) ---
INSTALL_PATH="/usr/local/bin/cleanpanel"
SERVICE_NAME="cleanpanel"
REPO="CleanPanel/CleanPanel"
# Name of the release binary asset to download (edit if it changes).
ASSET_NAME="cleanpanel"
# ------------------------------

echo "Stopping ${SERVICE_NAME}..."
systemctl stop "${SERVICE_NAME}"

echo "Backing up current binary to ${INSTALL_PATH}.bak..."
cp "${INSTALL_PATH}" "${INSTALL_PATH}.bak"

echo "Downloading latest release..."
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "${TMP_DIR}"' EXIT

DOWNLOAD_URL="https://github.com/${REPO}/releases/latest/download/${ASSET_NAME}"
curl -fL -o "${TMP_DIR}/${ASSET_NAME}" "${DOWNLOAD_URL}"

echo "Installing new binary..."
install -m 755 "${TMP_DIR}/${ASSET_NAME}" "${INSTALL_PATH}"

echo "Starting ${SERVICE_NAME}..."
systemctl start "${SERVICE_NAME}"
systemctl status "${SERVICE_NAME}" --no-pager || true

echo "Update complete. Verify the version in the dashboard."
echo "If the new version does not work, restore the backup:"
echo "  systemctl stop ${SERVICE_NAME}"
echo "  cp ${INSTALL_PATH}.bak ${INSTALL_PATH}"
echo "  systemctl start ${SERVICE_NAME}"
