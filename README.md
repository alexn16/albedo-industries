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

## License

Copyright ALBEDO Industries. All rights reserved.
