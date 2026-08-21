# Static deployment and cache behaviour

The site deploys through GitHub Pages. Vite emits content-hashed JavaScript and CSS filenames, so a new build cannot overwrite an older asset at the same URL. Those immutable assets are safe to cache for a long period.

The HTML entry point must be revalidated because it selects the current hashed assets. `index.html` includes a cache-control revalidation hint for browser-compatible static hosting. GitHub Pages controls the actual HTTP `Cache-Control` response and does not support repository-defined per-path headers, so the repository cannot guarantee a zero-second HTML cache lifetime.

There is no service worker or application cache in this project. The deployment workflow uploads a complete build as one Pages artifact, avoiding an HTML deployment that references assets which have not yet been published. GitHub Pages may retain its edge-cached HTML briefly after deployment; a normal reload revalidates after the host-controlled cache window.

If strict cache headers become necessary, place a CDN or host that supports response-header configuration in front of the static build and configure:

- `/` and `/index.html`: `Cache-Control: no-cache, must-revalidate`
- `/assets/*`: `Cache-Control: public, max-age=31536000, immutable`

Do not add a service worker solely to address this limitation; a stale worker can make version recovery less reliable.
