import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Foreman from './pages/Foreman'
import FastSoftware from './pages/FastSoftware'
import PurchasingAgentDemo from './pages/PurchasingAgentDemo'
import Updates from './pages/Updates'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Security from './pages/Security'

const ComputeInfrastructure = lazy(() => import('./pages/ComputeInfrastructure'))
const InfrastructureEurope = lazy(() => import('./pages/InfrastructureEurope'))
const InfrastructureCountry = lazy(() => import('./pages/InfrastructureCountry'))
const InfrastructureCandidate = lazy(() => import('./pages/InfrastructureCandidate'))
const InfrastructureFunding = lazy(() => import('./pages/InfrastructureFunding'))
const AsPontesResearch = lazy(() => import('./pages/AsPontesResearch'))

function App() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-5xl px-6 py-24" role="status">Loading page…</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="foreman" element={<Foreman />} />
        <Route path="fastsoftware" element={<FastSoftware />} />
        <Route path="fastsoftware/purchasing-agent" element={<PurchasingAgentDemo />} />
        <Route path="updates" element={<Updates />} />
        <Route path="support" element={<Support />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="security" element={<Security />} />
        <Route path="compute-infrastructure" element={<ComputeInfrastructure />} />
        <Route path="infrastructure" element={<InfrastructureEurope />} />
        <Route path="infrastructure/europe" element={<InfrastructureEurope />} />
        <Route path="infrastructure/funding" element={<InfrastructureFunding />} />
        <Route path="infrastructure/:country" element={<InfrastructureCountry />} />
        <Route path="infrastructure/spain/as-pontes/research" element={<AsPontesResearch />} />
        <Route path="infrastructure/:country/:slug" element={<InfrastructureCandidate />} />
        <Route path="infrastructure/:country/:slug/funding" element={<InfrastructureFunding />} />
      </Route>
    </Routes>
    </Suspense>
  )
}

export default App
