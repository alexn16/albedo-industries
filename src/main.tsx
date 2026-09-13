import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// Upgrade shared HashRouter URLs before BrowserRouter reads the clean path.
const legacyAtlasSections: Record<string, string> = { model: 'overview', pipeline: 'pipeline', process: 'validation', research: 'research', standard: 'evidence', partners: 'partners', about: 'leadership' }
const legacyHash = window.location.hash.slice(1)
if (legacyHash.startsWith('/')) {
  const [pathAndQuery, section] = legacyHash.split('#')
  window.history.replaceState(null, '', `${pathAndQuery}${section ? `#${section}` : ''}`)
} else if (legacyAtlasSections[legacyHash]) window.history.replaceState(null, '', `/atlas?section=${legacyAtlasSections[legacyHash]}`)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
