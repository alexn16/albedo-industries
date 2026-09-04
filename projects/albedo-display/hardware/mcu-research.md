# MCU comparison

| Candidate | BLE | Display fit | Trade-off | Decision |
|---|---|---|---|---|
| ESP32-C3 | BLE 5, Wi-Fi present but optional | suitable for constrained SPI rendering; limited headroom | low cost | benchmark second |
| ESP32-S3 | BLE 5, more memory/peripherals | strongest prototype path | modestly higher cost | **V0 first** |
| Nordic nRF52 class | BLE mature | display integration varies | typically higher component/tooling cost | fallback |
| low-cost BLE MCUs | varies | engineering/support risk | possible volume saving | consider only after quotes |

Do not optimise cents before measuring payload, frame buffer and peripheral needs.
