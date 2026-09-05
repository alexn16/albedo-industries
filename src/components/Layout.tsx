import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ScrollToSection } from './SectionLink'

export default function Layout() {
  const location = useLocation()
  const skip = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const main = document.getElementById('main-content')
    main?.scrollIntoView({ block: 'start' })
    main?.focus({ preventScroll: true })
  }
  return (
    <div className="min-h-screen flex flex-col">
      <a className="skip-link" href={`#${location.pathname}${location.search}`} onClick={skip}>Skip to main content</a>
      <ScrollToSection />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
