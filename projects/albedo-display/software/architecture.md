# Simplest software architecture

AI/tool call → Android test harness → schema validation → template + data JSON → CBOR/binary encoding → BLE GATT chunks → ESP32 renderer → display.

AI output is untrusted: the phone constrains length, coordinates, colours and permitted components. Device stores the last valid screen, reports capability/version, and shows stale/offline state. No production app before workflow validation.
