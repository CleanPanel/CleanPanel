# MooProxy

MooProxy is the panel's residential-IP exit source. Exits created from
MooProxy use residential IPs instead of datacenter addresses.

## What you need

1. A MooProxy account. MooProxy is a paid residential proxy service — sign
   up with MooProxy and get your proxy username and password from its
   dashboard. The panel does not include an account.
2. CleanPanel v1.0.30 or later.

## Setup

1. Open the dashboard → **Settings → MooProxy**.
2. Turn on **Enable MooProxy**.
3. Enter **MooProxy proxy user** and **MooProxy proxy password** (leave the
   password field blank to keep the current password).
4. **Entry host** / **Entry port** — defaults are `us.mooproxy.net` and
   `55688`. Change them only if MooProxy gives you a different entry point.
5. **Session length (minutes — max 120)**: how long one exit IP stays fixed
   (a sticky session). Default is 120 minutes.
6. **MooProxy parallel hunt**, **Max attempts per hunt** (default 60) and
   **Traffic cap per hunt (MB)** (default 5 MB) control how a hunt runs.
7. Save the settings.
8. Choose the hunt countries: **Settings → MooProxy countries**. Supported
   countries: Germany (DE), France (FR), United Kingdom (GB), Netherlands
   (NL), United States (US).
9. Start a hunt: **Exits → Find clean IP (MooProxy)**.

## How it works

- Each session holds one fixed exit IP for up to 120 minutes (sticky
  session). The IP does not change during the session.
- Only score-0 IPs are accepted. A dirty exit is deleted.
- Hunts use your MooProxy account traffic: each hunt attempt uses up to
  5 MB, and each session has a 400 MB traffic cap.
- `moo-keeper` keeps the session alive so the exit IP stays stable during
  the sticky session.
- When a session expires, or its traffic cap is reached, the exit is
  replaced by hunting a new one.

## Troubleshooting

- **Hunt fails or finds nothing**: check the proxy username and password,
  the entry host and port, and that the MooProxy account still has traffic.
- **Session ends early**: the 400 MB per-session traffic cap was reached.
- **An exit disappears**: its IP was no longer score 0, so the panel
  removed it and will hunt a replacement.
