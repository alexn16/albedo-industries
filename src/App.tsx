import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import RouteLoading from './components/RouteLoading'
import RouteErrorBoundary from './components/RouteErrorBoundary'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { routeModules } from './routes/routeModules'
const pages = Object.fromEntries(Object.entries(routeModules).map(([key, loader]) => [key, lazy(loader)])) as Record<keyof typeof routeModules, React.LazyExoticComponent<React.ComponentType>>
function AppRoutes() { const P = pages; const location = useLocation(); return <Suspense key={`${location.pathname}${location.search}`} fallback={<RouteLoading />}><Routes location={location}><Route path="/" element={<Layout />}>
  <Route index element={<Home />} /><Route path="about" element={<P.about />} /><Route path="projects" element={<P.projects />} /><Route path="projects/:slug" element={<P.project />} />
  <Route path="foreman" element={<P.foreman />} /><Route path="fastsoftware" element={<P.fastSoftware />} /><Route path="fastsoftware/purchasing-agent" element={<P.purchasingAgent />} /><Route path="updates" element={<P.updates />} /><Route path="support" element={<P.support />} />
  <Route path="privacy" element={<P.privacy />} /><Route path="terms" element={<P.terms />} /><Route path="security" element={<P.security />} /><Route path="compute-infrastructure" element={<P.compute />} />
  <Route path="display" element={<P.display />} /><Route path="display/invest" element={<P.displayInvest />} />
  <Route path="infrastructure" element={<P.atlas />} /><Route path="infrastructure/europe" element={<P.atlas />} /><Route path="infrastructure/atlas" element={<P.atlas />} /><Route path="atlas" element={<P.atlas />} />
  <Route path="infrastructure/atlas/partners" element={<P.partners />} /><Route path="atlas/partners" element={<P.partners />} /><Route path="infrastructure/funding" element={<P.partners />} />
  <Route path="atlas/research" element={<P.research />} /><Route path="infrastructure/atlas/research" element={<P.research />} />
  <Route path="infrastructure/spain/as-pontes/research" element={<P.asPontesResearch />} /><Route path="infrastructure/spain/el-bierzo" element={<P.elBierzo />} /><Route path="infrastructure/uruguay/canelones" element={<P.canelones />} />
  <Route path="infrastructure/portugal/sines" element={<P.sines />} /><Route path="infrastructure/spain/as-pontes" element={<P.asPontes />} /><Route path="infrastructure/finland/kouvola-kotka" element={<P.kouvolaKotka />} />
  <Route path="infrastructure/:country" element={<P.country />} /><Route path="infrastructure/:country/:slug" element={<P.candidate />} /><Route path="infrastructure/:country/:slug/funding" element={<P.partners />} />
  <Route path="*" element={<NotFound />} />
</Route></Routes></Suspense> }

export default function App() { return <RouteErrorBoundary><AppRoutes /></RouteErrorBoundary> }
