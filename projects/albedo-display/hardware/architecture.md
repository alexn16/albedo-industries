# V0 hardware architecture

USB-C 5 V → protection/regulation → ESP32-S3 development controller → SPI/RGB display controller → 4.3-inch panel. BLE receives versioned, checksummed chunks. No battery, touch, audio, camera, cellular, local AI or required Wi-Fi.

ESP32-S3 is preferred for the first colour demo because prototyping headroom is more valuable than premature MCU savings. Benchmark ESP32-C3 after the payload/render path is proven.
