import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAtlasShellLanguage } from '../hooks/useAtlasShellLanguage'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const locale=useAtlasShellLanguage()
  const t={en:['About','Projects','Europe research','Updates','Support','Contact','Toggle menu'],es:['Empresa','Proyectos','Investigación en Europa','Novedades','Ayuda','Contacto','Abrir o cerrar el menú'],pt:['Empresa','Projetos','Investigação na Europa','Atualizações','Apoio','Contacto','Abrir ou fechar o menu'],fi:['Yritys','Hankkeet','Euroopan tutkimus','Päivitykset','Tuki','Yhteystiedot','Avaa tai sulje valikko']}[locale]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On the home page with video hero, use white text when not scrolled
  const heroOverlay = isHome && !scrolled

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    heroOverlay
      ? `transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
      : `transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-zinc-200/60 shadow-sm'
          : 'bg-white/0 backdrop-blur-none border-b border-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${heroOverlay ? 'text-white' : ''}`}>
          ALBEDO
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/about" className={linkClass}>
            {t[0]}
          </NavLink>
          <NavLink to="/fastsoftware" className={linkClass}>
            FastSoftware
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            {t[1]}
          </NavLink>
          <NavLink to="/infrastructure/europe" className={linkClass}>
            {t[2]}
          </NavLink>
          <NavLink to="/updates" className={linkClass}>
            {t[3]}
          </NavLink>
          <NavLink to="/support" className={linkClass}>
            {t[4]}
          </NavLink>
          <a
            href="mailto:alex@albedo-industries.com?subject=ALBEDO%20Industries%20inquiry&body=Hi%20ALBEDO%2C%0A%0AI%E2%80%99d%20like%20to%20get%20in%20touch%20about%20ALBEDO%20Industries.%0A%0ATopic%3A%0A%0ACompany%20%2F%20project%3A%0A%0AThanks."
            className={`ml-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              heroOverlay
                ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}
          >
            {t[5]}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 -mr-2 ${heroOverlay ? 'text-white' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={t[6]}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile navigation — animated slide-down */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 px-6 py-4 space-y-4 bg-white/95 backdrop-blur-lg mobile-menu-enter">
          <NavLink
            to="/about"
            className="block transition-colors text-zinc-500 hover:text-zinc-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t[0]}
          </NavLink>
          <NavLink
            to="/fastsoftware"
            className="block transition-colors text-zinc-500 hover:text-zinc-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            FastSoftware
          </NavLink>
          <NavLink
            to="/projects"
            className="block transition-colors text-zinc-500 hover:text-zinc-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t[1]}
          </NavLink>
          <NavLink
            to="/infrastructure/europe"
            className="block transition-colors text-zinc-500 hover:text-zinc-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t[2]}
          </NavLink>
          <NavLink
            to="/updates"
            className="block transition-colors text-zinc-500 hover:text-zinc-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t[3]}
          </NavLink>
          <NavLink
            to="/support"
            className="block transition-colors text-zinc-500 hover:text-zinc-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t[4]}
          </NavLink>
          <a
            href="mailto:alex@albedo-industries.com?subject=ALBEDO%20Industries%20inquiry&body=Hi%20ALBEDO%2C%0A%0AI%E2%80%99d%20like%20to%20get%20in%20touch%20about%20ALBEDO%20Industries.%0A%0ATopic%3A%0A%0ACompany%20%2F%20project%3A%0A%0AThanks."
            className="block w-full text-center px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            {t[5]}
          </a>
        </div>
      )}
    </header>
  )
}
