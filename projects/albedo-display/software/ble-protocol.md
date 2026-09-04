# BLE protocol draft v0

GATT characteristics: `capabilities` (read), `manifest` (write), `chunk` (write without response), `commit` (write), `status` (notify). Session manifest includes schema version, payload length, SHA-256, compression and screen ID. Sequence-number chunks; reject incomplete/hash-failed updates; atomically swap only after validation. Benchmark negotiated MTU and throughput on target phones—do not promise a latency until measured.
