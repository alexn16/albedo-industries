# Albedo Industries website V2

Implemented against the existing React 19 / TypeScript / Vite / Tailwind application on 20 October 2026. BrowserRouter, lazy route modules, public research records, historical project records, existing contact email and the GitHub Pages workflow are retained. No project dependencies or lockfile changes were required.

## Pages and shared experience

| Route | Result |
| --- | --- |
| `/` | New company introduction, three contact/exploration paths, consistent cards for all five divisions, Atlas priority, visible development stages and a featured opportunity sourced from the Atlas record. |
| `/atlas` and existing aliases | Refined commercial proposition, four partner audiences, five development steps, expandable evidence and validation requirements, commercial structures and clear separation of investigation, validation, documented capacity and contractual commitment. |
| `/atlas/partners` | Existing development-capital and co-development brief retained; clearer headline, corrected opportunity link and improved text contrast. |
| `/robotics` | New emerging division, proposed contribution model, five target infrastructure sectors, six technology categories, conditional Atlas connection, four-stage roadmap and industrial partner enquiry. |
| `/orbital` | Terrestrial research, demonstration, autonomy validation and potential space experiments; practical research priorities and explicit pre-development status. Existing research and experiment pages remain linked. |
| `/display` | Broader applications across infrastructure, industry, buildings, retail, consumer information, emerging markets and AI interfaces; affordability, open technology choice, proposed connectivity and prototype requirements. |
| `/display/invest` | Updated strategic brief aligned with the wider product vision, open technology selection and unvalidated commercial models. Fixed ordered-list semantics and contrast. |
| `/fastsoftware` | Practical operational problems; Foreman labelled building-stage; Purchasing Agent labelled a static demonstration. Recordings have user-controlled playback. |
| `/about` | Company direction, five division stages, evidence-led development process, existing founder and collaboration paths. |
| `/support` | Investor, industrial partner, developer/operator/landowner and business-customer email paths; division-specific subjects; direct address and guidance for confidential information. |

Shared header and footer integrate Robotics and all five divisions. The mobile menu supports Escape, focus cycling, scroll locking and visible current-page state. All new copy is English. Existing research translations and historical records have been retained.

Historic Atlas query/fragment links and Display section names now resolve to existing sections. Older `/#/...` URLs retain the existing BrowserRouter migration. Atlas Foundation and the project archive remain accessible.

## Evidence and commercial boundaries

- Atlas remains the primary commercial development initiative, not an operating data center business.
- Beluluane's **60 MW** remains a **preliminary, counterparty-reported, unverified** capacity statement. No Atlas allocation or independent verification is claimed. The underlying record's review date was not refreshed without new evidence.
- Land, electricity, permits, financing and customers are not presented as secured for Atlas. Evidence levels and project commitments remain separate.
- Robotics is in development. No fleet, equipment agreement, completed autonomous project or confirmed Mozambique pilot is claimed. Equipment suitability, regulation, safety, logistics and economics are prerequisites. Human oversight remains part of the operating model.
- Orbital is research/pre-development. No satellite manufacture, operating orbital data center or booked launch is claimed.
- Display is pre-prototype. Technology, connectivity, AI updates, unit economics and manufacturing remain to be validated.
- FastSoftware's demonstrations are distinguished from production integrations and deployments.
- Contact links prepare drafts in the visitor's email application. No new submission service, analytics, tracking or payment flow was introduced. Email delivery was not tested by sending messages.

## Visuals, performance and accessibility

The original dark/light palette, restrained amber accent, technical presentation and existing hero imagery remain. Shared section rhythm, typography, buttons and stage labels make the divisions consistent. Split-hero headings keep long words intact, and decorative link indicators use SVG instead of relying on font glyph coverage.

Robotics has an explicitly labelled AI-generated construction concept, with responsive WebP derivatives. It is not project evidence. See `public/media/robotics/README.md`. Display's existing concept artwork has compressed responsive derivatives; its original full-size file remains available.

Hero motion respects reduced-motion and data-saver preferences, retains a static fallback and now offers a pause/play control. Software recordings no longer autoplay. All six sharing cards have PNG variants for social-platform compatibility, with SVG sources retained.

Robotics is included in route loading, navigation, footer, metadata, related-page links, the source sitemap and the generated production sitemap. Updated company pages share runtime and prerender title/description data. Open Graph and Twitter descriptions are route-specific. Company structured data includes the five divisions.

## Validation

- `npm run qa`: TypeScript, ESLint, internal links, media, Atlas public evidence/maps, Orbital research/experiment, Display assets, production build/prerender, performance budget and HTTP SEO smoke.
- Production output: **36 canonical prerendered pages**. HTTP smoke exercises **20 representative routes** and public assets, including Robotics indexing and development-status statements.
- Chromium/Playwright: **10 pages at 320, 390, 768, 1024 and 1440 pixels**. Verified one H1/main landmark, English document language, heading order, metadata/canonical URLs, image decoding, existing email recipient, no horizontal overflow, no browser exceptions and no failed local requests.
- axe-core: no reported WCAG 2 A/AA or 2.1 AA violations on the ten audited pages at phone width after correcting the reported contrast and list issues. Automated checks do not establish complete accessibility conformance.
- Interaction checks: mobile navigation, Escape/focus handling, navigation closure, legacy hash URLs, Atlas/Display anchor aliases, homepage section CTA and opportunity details.
- Final targeted checks cover motion playback, reduced motion, video fallback, menu focus cycling, and Robotics/Display split-hero typography at the five widths.
- No native Safari, Firefox, physical-device, email-delivery or production backend integration testing is claimed. The public website returned an access error from this environment, so live comparison and production verification remain unavailable.

Existing non-failing audit findings remain: nine Atlas public records require updated evidence review and ten Orbital research topics lack verified sources. They were not marked resolved without new evidence.

## Deployment and outstanding decisions

The build is prepared for the existing `.github/workflows/deploy.yml`: a push to `main` runs the quality gates and deploys `dist` to GitHub Pages. The dependency manifest and lockfile are unchanged.

Publish through the existing main-branch workflow. A local build or successful push does not establish successful publication: verify the matching GitHub Actions run and the public routes after pushing.

Business inputs needed for future progression, rather than additional website claims:

1. Reviewed documentary evidence for Atlas opportunities, especially Beluluane's plot and project-specific power pathway.
2. A qualified Robotics partner, scoped work package and validated pilot location before publishing any pilot commitment.
3. Display user research, engineering technology selection, prototype evidence and manufacturing economics.
4. Orbital primary-source verification, terrestrial hardware and measured experiment results.
5. Project-specific commercial terms and confidentiality review before disclosing private partner or site information.
