# Display payload decision

| Format | Bandwidth | MCU cost | Flexibility | V0 |
|---|---|---|---|---|
| text + layout JSON | low/medium | parser/rendering | high | authoring/debug |
| compact vector commands | low | custom renderer | high | later |
| bitmap/compressed image | high | framebuffer/decode | maximal | fallback/test |
| template + data | **lowest** | simple renderer | constrained | **primary** |

```json
{"v":0,"template":"agenda","theme":"light","fields":{"meeting":"10:30 Supplier review","priorities":["Validate panel","Test BLE"]}}
```
Long-term schema supports text, font token, position, section, icon, line/bar, colour/background and screen state—never arbitrary executable code.
