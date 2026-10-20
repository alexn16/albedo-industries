import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Home from '../src/pages/Home'
import Atlas from '../src/pages/InfrastructureEurope'
import Robotics from '../src/pages/Robotics'
import Orbital from '../src/pages/Orbital'
import Display from '../src/pages/AlbedoDisplay'
import DisplayInvest from '../src/pages/AlbedoDisplayInvest'
import FastSoftware from '../src/pages/FastSoftware'
import About from '../src/pages/About'
import Support from '../src/pages/Support'

const pages = { '/': Home, '/atlas': Atlas, '/robotics': Robotics, '/orbital': Orbital, '/display': Display, '/display/invest': DisplayInvest, '/fastsoftware': FastSoftware, '/about': About, '/support': Support }

/** Render the actual division components so public copy cannot drift from crawler HTML. */
export function renderCompanyPage(route: string) {
  const Page = pages[route as keyof typeof pages]
  if (!Page) throw new Error(`No company prerender component for ${route}`)
  return renderToString(<MemoryRouter initialEntries={[route]}><div className="min-h-screen flex flex-col"><a href="#main-content" className="skip-link">Skip to main content</a><Header /><main id="main-content" className="flex-1" tabIndex={-1}><Page /></main><Footer /></div></MemoryRouter>)
}
