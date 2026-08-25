import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// HashRouter owns the URL fragment, so historic Atlas section-only fragments must
// be upgraded before the router reads them as application routes.
const legacyAtlasSections: Record<string, string> = {
  model: 'overview', pipeline: 'pipeline', process: 'validation', research: 'research',
  standard: 'evidence', partners: 'partners', about: 'leadership',
}
const legacyFragment = window.location.hash.slice(1).replace(/^\//, '')
if (legacyAtlasSections[legacyFragment]) {
  window.history.replaceState(null, '', `/#/atlas?section=${legacyAtlasSections[legacyFragment]}`)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
