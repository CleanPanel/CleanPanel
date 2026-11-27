# CleanPanel

CleanPanel is a self-hosted server management panel with a web dashboard for managing users, traffic and services on your own server.

Current version: **v1.0.30**

## Features

- User management: create, edit, enable, disable and remove users
- Traffic and quota management per user
- Time limits and expiry dates per user
- Inbound management: create, edit and remove inbounds
- Subscription management for users
- Announcements for users from the dashboard
- Cloudflare inbounds (WebSocket and XHTTP/TLS)
- Create an inbound from a link
- Modern web dashboard with traffic statistics

## Requirements

- Your own server (VPS or dedicated server)
- Ubuntu 22.04 or Ubuntu 24.04
- Root or sudo access
- A domain name pointing to your server (recommended, for TLS)

## Install

See [docs/INSTALL.md](docs/INSTALL.md) for step-by-step installation from a release binary.

Short version:

1. Download the latest release binary from the [Releases](../../releases) page.
2. Make it executable and place it in the install directory.
3. Run the panel and open the web dashboard.
4. Change the default admin credentials on first login.

## Update

See [docs/UPDATE.md](docs/UPDATE.md) for the full update flow, and `update.sh` for a helper script.

Short version:

1. Check the [Releases](../../releases) page for the latest version.
2. Download the new binary.
3. Stop the panel service, back up the current binary, replace it, and start the service again.
4. Verify the version in the dashboard.

## Screenshots

Screenshots of the panel dashboard are in [docs/screenshots/](docs/screenshots/).

## Security

- Never share your admin credentials, API tokens or server addresses in public issues.
- Keep your server and the panel updated to the latest release.
- Use TLS (HTTPS) for the dashboard.
- See [SECURITY.md](SECURITY.md) for how to report a security issue.

## FAQ

**Do I need a domain?**
A domain is recommended so the dashboard can use TLS, but the panel can also run on an IP address.

**Which operating systems are supported?**
Ubuntu 22.04 and Ubuntu 24.04 are supported.

**Where do I get the latest version?**
From the [Releases](../../releases) page of this repository.

**How do I report a bug?**
Open an issue in this repository with the panel version, your operating system, and the steps to reproduce the problem. Do not include credentials, tokens or server addresses.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Support / Donations

If CleanPanel is useful to you, donations are welcome and completely voluntary. They help with development and maintenance.

- Wallet address (TRC20): TBpfUztumvm2GQnYLFbL2LXwCXBThDZyVF

The donation address is also shown on the main dashboard of the panel, so it is visible when you open the panel main page.

## License

CleanPanel is released under the MIT License. See [LICENSE](LICENSE).
