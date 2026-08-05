# Publishing an Atlas candidate page

Atlas candidate pages are rendered from structured data. A new researched location should not need a custom React page.

## Add a candidate in 30–60 minutes

1. Add or update the operational candidate record in `src/data/infrastructureCandidates.ts` with ID, slug, country, region, coordinates, evidence categories, risks, gates, sources and updates.
2. Add a public publication record in `src/data/candidatePublications.ts` keyed by the same candidate ID.
3. Set the local language using `localLanguageByCountry` conventions: Spain `es`, Portugal `pt`, Germany `de`, France `fr`, Sweden `sv`, Finland `fi`, Norway `no`, Poland `pl`. English should be stored explicitly as the secondary language. For Galicia, Galician (`gl`) can be added as another stored translation later.
4. Add reviewed copy for the visual hero, metrics, opportunity cards, decisive question, CTAs and collapsed technical details. Do not use runtime machine translation.
5. Add assets under a URL-safe public path such as `public/media/albedo-industries/<candidate-slug>/`. Provide useful alt text and mark conceptual visuals clearly. Do not show invented future data-centre renders as real assets.
6. Add the full PDF report under a URL-safe public path and set `report.href` plus `report.downloadName` in the publication record.
7. Confirm the mandatory factual boundaries are included when applicable: no land secured, no grid capacity confirmed, no permits, no customers, no financing and no construction.
8. Visit `/infrastructure/<country>/<slug>` and, if an older compatibility route exists, confirm it renders the same `AtlasCandidatePage`.

## Required validation

Run:

```bash
npm run build
npm run lint
git diff --check
```

Then manually verify the local-language default, English switching, PDF download, candidate map, candidate-tagged capacity form, candidate-tagged partner form, funding route and country navigation.
