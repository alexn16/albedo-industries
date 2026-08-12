import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ScrollToSection } from './SectionLink'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToSection />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
