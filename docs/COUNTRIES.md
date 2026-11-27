# Supported countries

Which countries each part of CleanPanel supports. Country lists are the
defaults in v1.0.30; they can change in later versions.

## Exits — MooProxy

Germany (DE), France (FR), United Kingdom (GB), Netherlands (NL),
United States (US).

See [docs/MOOPROXY.md](MOOPROXY.md) for how to set up MooProxy.

## Exits — VPN Gate

Australia (AU), United Kingdom (GB), Hong Kong (HK), Hungary (HU),
Italy (IT), Japan (JP), South Korea (KR), Russia (RU), Thailand (TH),
Turkey (TR), Ukraine (UA).

## Telegram proxy

The Telegram proxy runs on the panel server itself, so its location is the
server's location. There is no country selection for it.

## OpenVPN / WireGuard

OpenVPN and WireGuard are server-level inbounds: their location is the
panel server's location. There is no country selection for them.

## Cloudflare inbounds (WebSocket / XHTTP-TLS)

A Cloudflare inbound uses the country of the exit it is bound to — the
Cloudflare path only changes how the connection reaches the server, not
which exit country it uses.
