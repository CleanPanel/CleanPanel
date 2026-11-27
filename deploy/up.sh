#!/bin/sh
# $dev is set by openvpn; tunnel index comes from the dev name cptunN.
# Per-tunnel policy routing: a dedicated table whose default route is
# this tunnel, selected by oif.
N=${dev#cptun}; T=$((400 + N))
ip route replace default dev "$dev" table $T
ip rule del oif "$dev" table $T 2>/dev/null
ip rule add oif "$dev" table $T priority $((2000 + N))
exit 0
