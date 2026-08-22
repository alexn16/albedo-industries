# ALBEDO / Project Atlas performance report

Measured 22 August 2026. The baseline is the unmodified commit; the after build is this change. Numbers below are measurements, not estimates.

## Reproducible baseline and bundle results

| Metric | Before | After |
| --- | ---: | ---: |
| Initial JavaScript, uncompressed | 437.46 kB | 253.43 kB |
| Initial JavaScript, gzip | 120.09 kB | 80.23 kB |
| Initial CSS, uncompressed | 50.17 kB | 50.51 kB |
| Initial CSS, gzip | 9.17 kB | 9.25 kB |
| HTML, gzip | 0.83 kB | 0.74 kB |
| Production modules transformed | 93 | 96 |

Run `npm run build && npm run performance:budget` to reproduce transfer-size results. Vite's build output is the source for the table. The initial shell is 33.2% smaller compressed. React, React DOM, React Router, the shared layout and homepage remain in the initial chunk. Projects (13.62 kB data plus 2.62 kB page), the generic candidate registry (7.18 kB), candidate pages (4.17–8.23 kB), Atlas (6.24 kB), and research (1.30 kB data plus 1.38 kB page) are now separate chunks. No initial or lazy JavaScript chunk exceeds 100 kB gzip.

The supplied inspection baseline reported 2.4–5.2 s TTFB, 2.5–3.2 s JavaScript response delay, 3.5 s CSS response delay, 2.7 s PDF response delay, and 335–386 ms internal transitions. This environment has no Chromium/Lighthouse executable and its outbound proxy returned HTTP 403 for the production domain. Consequently **no defensible before/after FCP, LCP, TBT, CLS, request-count, mobile-throttled, cold/warm, or edge-preview measurement could be collected here**. Those metrics must not be presented as improvements. Reproduce them with the same Lighthouse version and profile against the current production URL and a preview URL: mobile preset, navigation mode, three cold runs with cache disabled, then three warm runs. Record medians and a Performance-panel click-to-next-paint measurement for `/` → `/atlas` → a candidate.

## Root cause and application changes

The multi-second wait before the small HTML/CSS/PDF responses begins is hosting/network latency and cannot be fixed with React. Application cost was nevertheless material: every non-Atlas page, the project catalogue and product implementations were statically imported into a 120.09 kB gzip entry chunk. All major non-home routes are now lazy, with dedicated priority candidate chunks. Atlas still loads only its compact pipeline and five-record research preview; the full registry stays in the research chunk. PDFs remain public URLs and are not imported or fetched by JavaScript.

Intent prefetching uses the same import functions as `React.lazy`. Homepage Atlas/partner calls-to-action and Atlas partner/research/candidate links warm only the page a visitor hovers, focuses, or touches. Prefetch is skipped when Save-Data is enabled. A stable, accessible branded fallback prevents a blank route. The error boundary recognizes dynamic-import failures, refreshes at most once per tab session, and otherwise shows recovery UI.

The removed Google Fonts stylesheet eliminates a render-blocking third-party request; the existing system-font fallback is used. The 3.2 MB hero video remains visually unchanged and uses metadata preload. PDFs and the Atlas social SVG remain direct public assets and are not part of a normal route request.

## Hosting and cache comparison

No preview deployment credentials were available, so deploying or claiming edge measurements would be unsafe. The included `_headers` makes a Cloudflare Pages preview apply revalidation to HTML, one-year immutable caching to hashed assets, and one-day caching to PDFs. `vercel.json` supplies the equivalent Vercel policy. GitHub Pages ignores both host-specific files and controls its own roughly ten-minute cache policy.

| Host | Cache control | Setup / HashRouter | Domain, HTTPS, rollback | Cost at current static scale |
| --- | --- | --- | --- | --- |
| GitHub Pages | Platform-controlled; unsuitable for per-path immutable policy | Existing workflow; HashRouter works | Existing domain/HTTPS; rollback by redeploy | Free |
| Cloudflare Pages | `_headers`, immutable hashed assets, edge cache | Import repo, build `npm run build`, output `dist`; HashRouter works without rewrites | Custom domain and managed HTTPS; atomic deploy rollback | Free tier is normally sufficient; verify account limits |
| Vercel | `vercel.json`, immutable hashed assets, edge cache | Import repo; Vite detected; HashRouter works without rewrites | Custom domain and managed HTTPS; deployment rollback | Hobby eligibility depends on project use; verify before selection |

The safest recommendation is a Cloudflare Pages preview, measured from target markets before approval. Then lower DNS TTL, attach the existing domain without changing route/PDF paths, verify HTTPS and hashes, switch DNS, retain GitHub Pages until monitoring passes, and roll back DNS if needed. Do not change production DNS on the basis of this repository-only work.

## PDFs and remaining verification

The five public dossiers are 146 kB, 210 kB, 226 kB, 480 kB and 6.96 MB. They remain click-only anchors; none is emitted into JavaScript. Static hosts infer `application/pdf` and support byte ranges, but production Content-Type, `Accept-Ranges`, TTFB and cache headers must be verified with `curl -I` from an unrestricted network. The 6.96 MB Kouvola–Kotka dossier is the only material size outlier and was not recompressed because quality could not be visually compared.

Performance budgets: initial JavaScript ≤100 KiB gzip, any one chunk ≤150 KiB gzip, CSS near the 9.2 KiB baseline; mobile targets remain TTFB <800 ms, FCP <1.8 s, LCP <2.5 s, CLS <0.1 and practical route transitions <300 ms. Hosting TTFB remains unresolved until an edge preview is measured.
