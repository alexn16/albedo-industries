# ALBEDO Industries Website

A static website for ALBEDO Industries, an independent startup holding company building focused software products.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Routing**: React Router (HashRouter for GitHub Pages compatibility)

## Project Structure

```
albedo-industries/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── data/
│   │   └── projects.ts     # Project data definitions
│   ├── pages/
│   │   ├── Home.tsx        # Landing page
│   │   ├── About.tsx       # About ALBEDO
│   │   ├── Projects.tsx    # Projects index
│   │   ├── ProjectDetail.tsx # Individual project template
│   │   ├── Support.tsx     # Support hub
│   │   ├── Privacy.tsx     # Privacy policy
│   │   ├── Terms.tsx       # Terms of service
│   │   └── Security.tsx    # Security practices
│   ├── App.tsx             # Route definitions
│   ├── main.tsx            # Application entry
│   └── index.css           # Global styles
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The development server runs at `http://localhost:5173` by default.

## Compute Infrastructure Initiative

The `/compute-infrastructure` hash route is the public validation page for the proposed modular AI compute facility. It is linked from the homepage, header and footer. Editable candidate regions, service categories, project updates and development-gate statuses live in `src/data/computeInfrastructure.ts`; page and legal copy live in `src/pages/ComputeInfrastructure.tsx`; and the two independently tagged lead forms live in `src/components/ComputeInterestForm.tsx`.

The broader Europe research programme is available at `/#/infrastructure/europe`, with linked country indexes and ten candidate evidence pages generated from `src/data/infrastructureCandidates.ts`. Content maintenance, evidence-state rules, map-key controls, candidate-tagging integration and next research actions are documented in [`docs/europe-infrastructure-research.md`](docs/europe-infrastructure-research.md).

Funding methodology and candidate-specific transparency pages begin at `/#/infrastructure/funding`. They contain no active offer or monetary data. The disabled authorized-provider adapter, reporting boundaries, activation prerequisites and rollback process are documented in [`docs/funding-transparency.md`](docs/funding-transparency.md).

### Form delivery

The Albedo Display pilot form posts JSON to `VITE_DISPLAY_PILOT_ENDPOINT` when an
operator-reviewed endpoint is configured. Without it (or if delivery fails), the
form clearly states that nothing was sent and offers a pre-filled email fallback.
The adapter expects a successful HTTP 2xx response and sends the fields documented
in `src/pages/AlbedoDisplay.tsx`. The hidden `website` field is a basic honeypot;
the receiving endpoint must still validate input, rate-limit requests, protect
stored personal data and apply an appropriate retention policy.

```bash
VITE_DISPLAY_PILOT_ENDPOINT=https://YOUR_REVIEWED_ENDPOINT.example/pilot npm run dev
```

The static site submits to the repository's Supabase Edge Function through `VITE_COMPUTE_INTEREST_ENDPOINT`. The function validates strict `capacity_interest` and `investor_partner_interest` payloads, rate-limits requests and writes through a server-only service role into separate RLS-protected tables. Complete deployment, migration, secrets, operator-review, testing and rollback instructions are in [`docs/compute-interest-backend.md`](docs/compute-interest-backend.md).

Without the variable, each form displays a prominent “Registration opening soon” notice, renders disabled fields for preview, disables submission and links to the site's existing email contact. It never accepts input or simulates storage. No analytics provider exists in this repository, so no new provider or lead-data tracking was introduced.

```bash
# Local example; point this only at a production-reviewed adapter
VITE_COMPUTE_INTEREST_ENDPOINT=https://YOUR_PROJECT.supabase.co/functions/v1/compute-interest npm run dev
```

`ENABLE_COMPUTE_RESERVATION_PAYMENTS` is intentionally absent/false. There is no payment UI. Before accepting any reservation deposit or investment, define the service and contracting entity, obtain legal and regulatory review, publish contractual and refund terms, establish tax/privacy treatment, classify the transaction, and implement an audited payment flow. Investment acceptance must use an appropriately regulated process rather than these interest forms.

### Operations and deployment

- Update milestones and candidate regions only after evidence is internally verified; do not mark a gate completed speculatively.
- The current GitHub Pages-compatible `HashRouter` exposes the route as `/#/compute-infrastructure`. Search engines do not treat fragments as separate sitemap URLs. Move to `BrowserRouter` with an SPA rewrite (or prerender the route) before expecting independent route indexing.
- The legal notice is in the funding section and form-specific confirmation copy is in `ComputeInterestForm.tsx`. Coordinate changes with the Privacy Policy.
- Production checks remain `npm run lint` and `npm run build`. The build performs the TypeScript project check before bundling.

### Implementation audit

The repository is a client-only React 19/TypeScript application using Vite, Tailwind CSS v4, React Router `HashRouter`, reusable layout components and IntersectionObserver reveal hooks. It deploys as static files (documented for GitHub Pages), has no existing backend, form service, analytics integration, test runner or formatter script, and exposes only build and ESLint quality gates. Metadata was previously global in `index.html`; the compute page updates route-specific title, description, canonical and Open Graph copy at runtime. The implementation therefore preserves the static architecture and supplies a fail-safe endpoint adapter rather than inventing storage or placing secrets in the browser.

### Adding a New Project

1. Edit `src/data/projects.ts` and add a new entry to the `projects` array:

```typescript
{
  slug: 'your-project-slug',
  name: 'Project Name',
  tagline: 'Brief description.',
  category: 'Consumer' | 'B2B',
  status: 'Live' | 'Building' | 'Concept',
  problem: 'Description of the problem...',
  solution: 'How this product solves it...',
  differentiator: 'What makes it different...',
  targetUsers: 'Who this is for...',
  vision: 'Where the product is headed...',
  website: 'https://example.com', // optional
  app: 'https://app.example.com', // optional
}
```

2. The project will automatically appear on the Projects page and have its own detail page at `/projects/your-project-slug`.

### Styling

This project uses Tailwind CSS v4 with the Vite plugin. Custom theme values are defined in `src/index.css` using CSS variables:

```css
@theme {
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, ...;
}
```

The design follows Apple/Linear/Stripe-inspired aesthetics:
- White/off-white backgrounds
- Near-black text (#18181b / zinc-900)
- Generous whitespace
- Subtle borders and shadows
- One accent color (blue-600)

## Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

2. Go to repository Settings > Pages
3. Set Source to "GitHub Actions"
4. Push to main branch to trigger deployment

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains the static site ready for deployment.

3. You can use any static hosting service (Netlify, Vercel, Cloudflare Pages, etc.) or push the `dist/` folder to a `gh-pages` branch.

## Custom Domain

To use a custom domain with GitHub Pages:

1. Add a `CNAME` file to the `public/` folder with your domain:
```
www.albedo.industries
```

2. Configure your DNS:
   - For apex domain (albedo.industries): Add A records pointing to GitHub's IPs
   - For subdomain (www.albedo.industries): Add a CNAME record pointing to `your-username.github.io`

3. In repository Settings > Pages, enter your custom domain

4. Enable "Enforce HTTPS" once DNS propagates

## Routing

This project uses HashRouter (`/#/about`, `/#/projects`, etc.) for GitHub Pages compatibility. This ensures all routes work correctly without server-side configuration.

If deploying to a server that supports SPA routing (Netlify, Vercel, etc.), you can switch to BrowserRouter in `src/main.tsx` for cleaner URLs.

## Browser Support

The site is designed for modern browsers and is fully responsive. Tested on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari / Chrome on iOS and Android

## Troubleshooting GitHub Pages

If the site appears blank or unstyled on GitHub Pages, check the following:

### 1. Tailwind CSS Not Loading

**Symptom**: Page shows plain HTML without styles.

**Cause**: Tailwind v4 requires the Vite plugin to be explicitly configured.

**Fix**: Ensure `vite.config.ts` includes the Tailwind plugin:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/albedo-industries/",
});
```

And `src/index.css` uses the v4 import syntax:

```css
@import "tailwindcss";
```

### 2. Assets Not Loading (404 Errors)

**Symptom**: Console shows 404 errors for CSS/JS files.

**Cause**: Incorrect base path configuration.

**Fix**: Ensure `vite.config.ts` has the correct base path matching your repository name:

```typescript
base: "/albedo-industries/",
```

### 3. Routing Not Working

**Symptom**: Direct navigation to `/about` shows 404.

**Cause**: GitHub Pages doesn't support SPA routing.

**Fix**: Use HashRouter (already configured). URLs will be `/#/about` format.

### 4. Verifying the Build

To verify your production build locally:

```bash
npm run build
npm run preview
```

Then check:
- Page source should reference `/albedo-industries/assets/...` paths
- CSS file should contain Tailwind utilities
- All routes should work via hash navigation

### 5. Checking Deployed Site

On the live GitHub Pages site:
1. Open browser DevTools (F12)
2. Check Console for errors
3. Check Network tab for failed asset requests
4. View page source to verify asset paths start with `/albedo-industries/`

If assets are loading from `/assets/...` instead of `/albedo-industries/assets/...`, the base path is misconfigured.

## License

Copyright ALBEDO Industries. All rights reserved.
