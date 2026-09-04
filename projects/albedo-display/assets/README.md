# Visual asset register

## Current primary asset

**Albedo Display V0 Concept Design** (`concept`, 2026-09-04) is served from `/media/screen/ChatGPT Image 4 sept 2026, 15_15_48.png`. It is the preferred public-facing visual. It is illustrative only: screen technology, dimensions, enclosure, electronics and BOM remain subject to validation. Metadata lives in `cad/albedo-display-v0-concept-2026-09-04.metadata.yml`.

The earlier `cad/albedo-display-v0-concept-cad.svg` and public `/media/albedo-display/v0-concept.svg` are retained as provenance/reference assets, not deleted or presented as the current primary visual.

## Evidence priority

1. Working prototype video
2. Real prototype photos
3. Real components / PCB
4. CAD / technical renders
5. Generic illustrations

Website asset records live in `src/data/albedoDisplayAssets.ts`. Each record carries title, date, status, caption, path and optional technical notes; add future evidence there without introducing a CMS. Valid statuses are `concept`, `prototype`, `testing`, `validated`, and `production-candidate`.
