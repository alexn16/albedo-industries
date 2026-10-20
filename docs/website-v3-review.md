# Website V3: implementation and review

Audit date: 20 October 2026. Source baseline: `e95a815` on `main`. Changes are local and have **not been deployed**.

## Production audit and priorities

Production access initially returned a proxy 403. After network access was enabled, the audit fetched the current production homepage, sitemap, robots file and all 36 sitemap destinations, following the host's directory redirects. Chromium inspected the current homepage, Atlas, Robotics, Orbital, Display, FastSoftware, contact page and archive at 1440 × 1000 and 390 × 844. The live homepage referenced `/assets/index-C4S1d8Nv.js`, matching the original checkout's build output. No cached website version was used as the audit source.

| Priority | Verified weakness | Implemented response |
| --- | --- | --- |
| Critical | Production redirects clean division URLs to trailing-slash paths. The client then replaces otherwise correct static metadata with “Page Not Found” and `noindex` on Robotics, Orbital, Display, FastSoftware and contact. | Normalize trailing slashes before SEO lookup; preserve canonical clean URLs. Check both URL forms in Chromium. This fix is local until deployment. |
| High | Atlas explains its work but lacks a consolidated investment-readiness checklist. Investor and landowner journeys mostly lead to generic email drafts. | Add nine diligence areas, evidence classifications and distinct preselected investor, operator, landowner and industrial-partner enquiry paths. |
| High | Robotics has the correct industrial vision already, but its first-pilot scope and evaluation sequence are less explicit. | Improve the existing page with four bounded pilot activities, five evaluation stages and an industrial-partner CTA. Keep the unconfirmed Mozambique context and human oversight. |
| High | Search-readable HTML contains manually maintained summaries rather than the complete division-page content. | Render the actual React components into static HTML for nine company pages, including all five divisions. No production SSR server or additional application dependency. |
| Medium | Most commercial contact journeys require a configured email client. No general-purpose secure delivery backend is established. | Add a clearly labelled local email composer with validation, division/topic preselection and a copy option for webmail. Preserve the existing address and direct email links. |
| Medium | The Purchasing Agent card uses a Foreman invoice recording, obscuring what the static demonstration actually does. | Replace that card's recording with a labelled supplier-comparison preview. Retain the Foreman recordings on its own page. |
| Medium | Low-contrast labels appear in the archive and technical research; scrolling tables lack keyboard access; the interactive map uses an image role. | Introduce surface-aware muted text, strengthen small status colors, add keyboard-focusable scroll regions and use a group role for the map. |
| Medium | ALB Parking's screenshot carousel expands a mobile grid beyond the viewport. | Allow its grid item to shrink while preserving the internal screenshot carousel. |
| Medium | The decorative hero video downloads on mobile unless reduced motion or Save-Data is active. | Use the existing static poster below 768px. Retain desktop playback, pause controls and reduced-motion/Save-Data behavior. |

All 36 production sitemap destinations returned final HTML with a unique title, description, canonical and one H1. Robotics was already present in navigation, static HTML, social metadata and the sitemap. Its live client-side trailing-slash metadata regression was the important discoverability defect; no duplicate Robotics page or navigation entry was added.

## Commercial and visual changes

- **Homepage:** retain the black, warm-white and amber visual identity; make Atlas the first hero CTA and the largest division card; explain the near-term data center focus and distinguish the other initiatives' maturity.
- **Atlas:** retain the opportunity list, research links, publication controls and five-stage commercial process. Add land/site control, grid, fiber, water/cooling, planning/environment, budget, capital, demand and timetable checks. Preliminary information is not relabelled as confirmed or investment-ready.
- **Robotics:** retain its route, concept image, sectors and Atlas connection. Explain machinery partnerships, qualified operators, local support and project coordination; explicitly exclude a proprietary robotics-software business model. Describe earthmoving, excavation, material transport and surveying as proposed pilot tasks. No site, fleet, partnership, date or completed operation is claimed.
- **Orbital:** preserve the Earth-first research pathway and experiment links. Give aerospace companies, research institutions and engineering teams concrete possible roles around a first terrestrial demonstrator. Hardware, flight readiness and launches remain unconfirmed.
- **Display:** explain the proposed compact physical device, the repeated-printing problem and why installation and upkeep costs matter. Preserve existing clearly labelled concept visuals rather than invent prototype evidence. Technology and production price remain open. Add a prototype-collaboration path and public-information use case.
- **FastSoftware:** distinguish Foreman development, recorded interface evidence and the static Purchasing Agent demonstration. Offer a direct workflow-demo CTA and a scoped evaluation enquiry, without deployment, customer or autonomous-purchasing claims.

## Contact behavior and privacy

The contact page prepares an email **locally**; it is not an online message-submission service. Required name, company, email, division, collaboration type and message fields use native browser validation and length limits. Preparing a draft makes no network submission, does not save browser storage and never displays a message-received confirmation. Editing the fields invalidates the prepared draft. The visitor can open a prefilled email or copy the message and address into webmail.

With JavaScript disabled, the composer fields are disabled and the existing direct email link remains available. This also prevents the browser's default form GET behavior from putting personal entries into a URL. Privacy copy describes the local preparation and the visitor's choice to send through an email provider. There is no marketing subscription or new tracking.

The existing Supabase Edge Function validates two specific compute-interest payloads. It is not reused as a general contact endpoint. A server-backed general form would require an approved receiving service, server-side validation, rate limiting/spam controls, delivery monitoring, a clear controller/legal basis, retention and processor/transfer arrangements. Those operator decisions are not fabricated by this implementation.

## Modified pages and components

**Pages:** `Home`, `InfrastructureEurope` (Atlas), `Robotics`, `Orbital`, `AlbedoDisplay`, `FastSoftware`, `Support`, `Privacy`, `Projects`, `ProjectDetail`, `Foreman`, `PurchasingAgentDemo`, `OrbitalResearch`, `OrbitalExperiment`, `AsPontesResearch`, and the As Pontes, Sines, Kouvola–Kotka, El Bierzo and Canelones candidate pages. Changes outside the main commercial pages concern verified readability, keyboard access or responsive layout.

**Shared components:** new `EnquiryComposer`; `Header`, `HeroVideo`, `Seo`, `DisplayAssetFigure`, `AlbParkingShowcase`, `MarketBrief`, `BeatFlowListen`, `GermetShowcase`, `ResearchIndicators`, `AtlasLocationMap`, `AtlasPrimitives`.

**Shared data/styles/build:** division stages and enquiry URL helper in `src/data/divisions.ts`; `src/index.css`; Atlas section registry; SEO pathname normalization; new `scripts/prerender-pages.tsx`; existing prerender script and runtime smoke checks. No dependency manifest or lockfile changes; no new public route.

## Verification

The implementation was checked with the repository QA commands and Chromium/Playwright. Browser audit tooling was installed outside the checkout; it is not an application dependency.

- `npm run qa`: TypeScript, ESLint, internal links, media, Atlas publication/maps, Orbital research/experiment, Display assets, production build, performance budget and HTTP smoke.
- The build retains **36 canonical public routes**. All five divisions expose their current content and CTAs without JavaScript. Robotics includes its industrial model, pilot qualifications and evaluation framework in static HTML.
- Built-site browser smoke: all 36 sitemap pages load, each has one H1, no uncaught JavaScript exceptions and no document-level mobile overflow.
- Contact checks: invalid-input blocking, Robotics division/topic preselection, correct email contents, clipboard copy, draft invalidation, no outbound submission/browser storage and disabled fields without JavaScript.
- Navigation checks include mobile open/close, Escape returning focus to the toggle, an existing single Robotics entry, focus wrapping, all five division enquiry CTAs, desktop video controls and the static mobile hero. Metadata is checked on clean and trailing-slash URLs.
- Automated accessibility checks cover WCAG 2/2.1 A/AA rules on the main desktop/mobile pages and every sitemap destination at mobile size. The final settled-page scan reported no automated violations across the 36 sitemap pages. These checks complement visual inspection; they do not certify every assistive-technology combination.

Content audits retain nine stale Atlas-review warnings and ten unsourced Orbital-topic warnings, with no audit failures. These are evidence-maintenance tasks, not measured research outcomes. Existing dates and scientific assumptions were not updated speculatively.

### Mobile performance evidence

A local mobile Lighthouse 13.5.0 run against the built homepage reported performance 99, accessibility 100, best practices 100 and SEO 100; FCP 1.5s, LCP 1.7s, TBT 50ms, CLS 0, with approximately 211 KiB transferred. This is a lab observation on this machine, not a production field measurement, a before/after hosting comparison or an INP measurement. Initial JavaScript is 86.87 KiB gzip, under the repository's 100 KiB budget. No external font request or application dependency was added.

Production responses retain host-controlled `Cache-Control: max-age=600`. GitHub Pages ignores Vercel-specific header rules. No DNS, hosting, cache policy or deployment workflow change was made. Actual field Core Web Vitals, indexed status and conversions need production monitoring/Search Console after an approved release.

## Remaining decisions and recommendations

1. **Approve a production release separately.** No push, deployment, DNS change or public release was performed. The live noindex regression remains until the code is released.
2. Decide whether to commission a general contact backend with verified delivery and the required privacy/operational arrangements. The completed email composer is usable without one.
3. Review aged Atlas records and substantiate Orbital sources through the existing evidence workflow. Do not interpret current counterparty-reported capacity as independently verified or allocated to Atlas.
4. Review live Search Console indexing and field performance after release; a sitemap or `index` directive cannot prove search-engine inclusion.
5. Revisit a new Display use-case visual only when there is additional product evidence or a specific engineering brief. Existing conceptual assets remain clearly labelled.

The environment network draft was updated with only `www.albedo-industries.com` and `albedo-industries.com` as custom allowed domains, preserving the package-manager presets. Production read access was subsequently verified. This network change does not deploy the website.
