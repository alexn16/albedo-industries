# Project Atlas public publication governance

The public repository is a publication surface, not Atlas's operational CRM or data room. Development stage and publication status are independent. Never commit private investor conversations, NDA material, pricing, DevEx budgets, negotiation strategy, private economics, internal priorities, unannounced counterparties, or CRM notes.

## Public layers

1. **Research universe** — a location or market studied; no active-development implication.
2. **Active pipeline** — current public-safe counterparty, utility, developer, or institutional work; material evidence may be incomplete.
3. **Development opportunity** — enough project-specific public-safe work for serious development-capital, principal-developer, operator, or infrastructure-investor discussion.
4. **Private diligence** — not a public pipeline state. Counterparties and private review remain outside this repository unless intentionally approved for publication.

`publication.visibility` governs representation separately from `stage`. New records use the `publish()` safe defaults: `homepageFeatured: false`, `atlasFeatured: false`, and `commercialPage: false`. Feature flags require an intentional editor decision. `private`, `hold`, and `archived` records must never be featured.

## Publication process

1. Complete research.
2. Classify every material claim using the Atlas evidence taxonomy.
3. Classify development stage.
4. Write a public-safe summary.
5. Define the next development gate.
6. State unresolved work and the public blocker.
7. Set a reliable ISO `lastReviewed` date; add `reviewDue` only when a review has actually been scheduled.
8. Choose visibility independently of stage.
9. Explicitly choose homepage, Atlas feature, and commercial-page status. Never feature by array order, MW, geography, or stage alone.
10. Run `npm run audit:atlas-public` and resolve every `FAIL`; assess every freshness `WARN` manually.
11. Build and review generated HTML, claims, routes, sitemap behavior, and mobile presentation.
12. Commit the reviewed publication decision.

## Commercial-page threshold

Create a commercial page only when several project-specific dimensions are public-safe and sufficiently defined: geography, initial scale, land pathway, power route, utility process, planning, connectivity, counterparty engagement, and next gate. Research pages answer what Atlas learned; commercial pages answer why Atlas is advancing the opportunity and what happens next.

## Current public reconciliation

An opportunity without a governed public pipeline record has no public classification, feature flag, commercial page, or claim. Internal reconciliation context must not be copied into this repository merely to make the public pipeline appear complete.

Canelones remains public but not featured: institutional and utility-path work may be described, while no suitable parcel is selected or controlled and a larger or adjacent site remains necessary. Beluluane is the sole current featured record; its counterparty-stated power and land context remains explicitly subject to plot, engineering, and project-specific capacity evidence.

## Checklist

- [ ] Public summary contains no confidential information.
- [ ] Stage and publication visibility are independently selected.
- [ ] Power, land, capacity, permits, financing, customer, option, exclusivity, and control claims are individually precise.
- [ ] Scale, next gate, unresolved work, evidence label, and ISO review date exist.
- [ ] Feature flags are explicit and permitted by visibility.
- [ ] Homepage has no more than three intentionally approved records.
- [ ] Research and commercial routes are not conflated.
- [ ] Sitemap contains no private, hold, archived, duplicate, or noindex route.
- [ ] Freshness warnings receive human review.
- [ ] Generated page and direct navigation were inspected before commit.
