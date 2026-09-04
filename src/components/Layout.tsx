import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ScrollToSection } from './SectionLink'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollToSection />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
