# Europe infrastructure research platform

## Public routes

- `/#/infrastructure` and `/#/infrastructure/europe` — Europe index, schematic map, filters and all ten candidates.
- `/#/infrastructure/{country}` — linked country-filtered index pages for Spain, Portugal, Germany, France, Sweden, Finland, Norway and Poland.
- `/#/infrastructure/{country}/{candidate}` — one reusable evidence-page template populated from typed configuration.

Candidate paths are defined in `src/data/infrastructureCandidates.ts`; do not add routes by duplicating page components. The ten initial records are As Pontes, Curtis–Teixeiro, Zaragoza/Aragón, Sines, Frankfurt/Rhine-Main periphery, Paris–Saclay/Île-de-France periphery, Luleå–Boden, Hamina–Kotka, Stavanger and the Warsaw–Poznań corridor.

## Atlas content model

`InfrastructureCandidate` retains candidate identity, regional coordinates and precision, classification, gate, review date, thesis evidence state, 11 research categories, unknowns, candidate-specific risks, standardized gates, source records and dated updates. `EvidenceState` distinguishes `verified`, `hypothesis`, `evidence_required` and `decision_pending`. Candidate configuration is intended to migrate cleanly into Atlas/Postgres later.

Research health reports evidence coverage as supported categories alongside reviewed sources, critical unknowns, open decisions, kill risks and freshness. It is not a quality score, ranking, probability of construction or investment assessment. A source must support the field it is attached to; a general grid-operator source does not verify candidate connection capacity.

To update a candidate:

1. Review primary evidence and record the review date.
2. Add a `CandidateSource` with a direct URL, publisher and precise limitation note.
3. Attach its ID only to fields it supports and change the evidence state only when justified.
4. Update critical unknowns, kill risks and next action rather than deleting unresolved facts.
5. Add a dated update describing a real research change.
6. Advance a gate only when every published gate condition has documentary support.

## Maps

Candidate pages use a Google Maps embed URL built from the reviewed candidate coordinates and precision. The previous implementation depended on `VITE_GOOGLE_MAPS_EMBED_API_KEY`; production did not consistently provide a correctly restricted key, so visitors could see an empty map container. Atlas no longer requires a client-side Google Maps API key for the public map panel.

Map behaviour now follows these rules:

1. Render a loading state while the iframe initializes.
2. Use coordinates, not parcel names, unless parcel precision is explicitly verified.
3. Set zoom from the published precision: region, municipality, site or parcel.
4. Show the precision label, coordinates and limitation text below the map.
5. If the provider fails, show a designed fallback with the location, coordinates, precision and a button to open Google Maps.

The map is contextual. It must not imply site control, land availability or a verified parcel.

## Candidate-tagged registrations

Candidate pages pass `candidate_id`, `candidate_slug` and `country_code` plus capacity `interest_strength` / `willing_to_discuss_loi`, or partner `local_relationship_type`. The Edge Function validates the ID–slug–country combination against a fixed allowlist. General programme forms remain valid without candidate metadata. Migration `202608030002_candidate_tagging.sql` adds constrained nullable fields and candidate-review indexes to the two existing protected tables.

When adding a candidate, update all of the following in one reviewed change:

- the typed frontend record;
- `candidateAllowlist` in the Edge Function;
- database candidate and country constraints in a new migration;
- backend tests for the new valid tag and a mismatched tag.

## Next primary research action by candidate

| Candidate | Next evidence task |
| --- | --- |
| EU-ES-01 As Pontes | Obtain written demand-side grid route/capacity evidence and verified land-control context. |
| EU-ES-02 Curtis–Teixeiro | Verify grid headroom, available compliant land and interaction with existing projects. |
| EU-ES-03 Aragón | Build a comparable primary-source power, land, equipment and customer baseline. |
| EU-PT-01 Sines | Verify incremental power, land and fibre opportunity after existing campus commitments. |
| EU-DE-01 Rhine-Main | Identify evidence-backed peripheral/brownfield planning and connection routes. |
| EU-FR-01 Paris periphery | Establish grid, water, planning and community screening criteria without selecting a parcel. |
| EU-SE-01 Luleå–Boden | Verify allocation, fibre resilience, skills and credible heat-reuse counterparties. |
| EU-FI-01 Hamina–Kotka | Verify grid access, expansion land, fibre diversity and regional demand depth. |
| EU-NO-01 Stavanger | Verify grid allocation, delivered economics, fibre and planning route. |
| EU-PL-01 Warsaw–Poznań | Split corridor evidence by city and verify power carbon, grid, land and demand conditions. |

No precise MW, land area, price, latency, CAPEX, schedule, customer count or funding total is published in this phase because reviewed supporting evidence has not been assembled. No candidate is a secured site or an investment product.
