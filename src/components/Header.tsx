import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAtlasShellLanguage } from '../hooks/useAtlasShellLanguage'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const hasVideoHero = location.pathname === '/' || location.pathname === '/atlas' || location.pathname.startsWith('/infrastructure')
  const locale=useAtlasShellLanguage()
  const t={en:['About','Partners','Toggle menu'],es:['Empresa','Socios','Abrir o cerrar el menú'],pt:['Empresa','Parceiros','Abrir ou fechar o menu'],fi:['Yritys','Kumppanit','Avaa tai sulje valikko']}[locale]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', close)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close) }
  }, [mobileMenuOpen])

  // On the home page with video hero, use white text when not scrolled
  const heroOverlay = hasVideoHero && !scrolled

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
        <div className="hidden md:flex items-center gap-7 text-sm">
          <NavLink to="/atlas" className={linkClass}>Atlas</NavLink>
          <NavLink to="/orbital" className={linkClass}>Orbital</NavLink>
          <NavLink to="/display" className={linkClass}>Display</NavLink>
          <NavLink to="/fastsoftware" className={linkClass}>Software</NavLink>
          <NavLink to="/about" className={linkClass}>{t[0]}</NavLink>
          <NavLink to="/atlas/partners" className={`ml-3 px-4 py-2 font-semibold ${heroOverlay?'bg-white text-zinc-950':'bg-zinc-950 text-white'}`}>{t[1]}</NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 -mr-2 ${heroOverlay ? 'text-white' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={t[2]}
          aria-expanded={mobileMenuOpen}
          aria-controls="site-mobile-menu"
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
        <div id="site-mobile-menu" className="md:hidden border-t border-zinc-100 bg-white/95 px-6 py-5 backdrop-blur-lg mobile-menu-enter">
          <div className="space-y-1">{[['Atlas','/atlas'],['Orbital','/orbital'],['Display','/display'],['Software','/fastsoftware'],[t[0],'/about']].map(([label,to])=><NavLink key={to} to={to} className="block min-h-11 py-3 text-zinc-700" onClick={()=>setMobileMenuOpen(false)}>{label}</NavLink>)}</div>
          <NavLink to="/atlas/partners" className="mt-4 flex min-h-12 items-center justify-center bg-zinc-950 px-4 text-sm font-semibold text-white" onClick={()=>setMobileMenuOpen(false)}>{t[1]}</NavLink>
        </div>
      )}
    </header>
  )
}
