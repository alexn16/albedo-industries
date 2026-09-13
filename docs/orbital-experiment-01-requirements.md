# Experiment 01 — Ground Design Review package

**Status:** EXPERIMENT DESIGN · ENGINEERING FREEZE IN PROGRESS  
**Hardware:** not purchased or assembled  
**Review date:** 2026-09-13

The typed source of truth is `src/data/orbitalExperimentEngineering.ts`. This document defines the decision boundary before procurement; it is not an assembly record.

## Recommendation

- **Baseline:** NVIDIA Jetson Orin Nano developer-kit class, conditional on verification of the exact official SKU, power modes, telemetry, interfaces, availability, lifecycle and price. It is recommended because a low-power accelerated Linux platform should generate useful power/recovery evidence while preserving more hosted-payload options—not because of a TOPS claim.
- **Fallback:** a small CPU-only x86 Linux node selected for measurable DC input, thermal telemetry, recovery behavior and container stability. It reduces software risk and provides a useful architecture comparison, but may be less relevant to a constrained hosted payload.
- **Guidance:** aim for a compute-module operating envelope around or below 25 W where evidence supports it. This is not a flight or fixed Stage A requirement.
- **Budget:** LOW, BASELINE and HIGH totals cannot be calculated until live prices and source URLs are verified. Every BOM entry is `PRICE TO VERIFY` and `DO NOT ORDER`.

## Review sequence

1. Freeze testable MUST/SHOULD/COULD/OUT OF SCOPE requirements.
2. Verify official candidate specifications and select exact baseline and fallback SKUs.
3. Approve independent watchdog and protected power-control boundaries.
4. Select calibratable instrumentation and define range, accuracy, resolution and sample rate.
5. Run Workload A continuous image classification and Workload B deterministic checkpointed image transformation on candidate hardware.
6. Validate immutable inputs, result hashes, duplicate prevention and useful-compute-uptime accounting.
7. Review every fault trigger, detector, autonomous response, safe duration, rollback, pass condition and metric.
8. Freeze database schema, configuration-as-code and timestamp behavior.
9. Establish normal variance using the minimum baseline condition; only then set quantitative Gate A thresholds.
10. Complete the multidisciplinary Ground Design Review before any purchase.

## Procurement decision

Nothing should be ordered before the review because official specifications, instrument accuracy, live price, stock and electrical compatibility remain unverified. After review, the baseline compute node, independent watchdog, protected supply/control, power instrument, ambient sensor, isolated storage and safety hardware can be ordered together. UPS/battery equipment, duplicate compute hardware, flight hardware, radiation instrumentation and hosted-payload services should not be ordered yet.

## Flight decision

Do not request a flight opportunity until Stage A has reproducible results, Gate A passes independent review, primary hosted-platform sources are verified, and orbit, radiation, thermal, power, communications, mass, volume, safety, integration, regulatory and mission-operations requirements are defined.
