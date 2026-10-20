import ArrowUpRight from './ArrowUpRight'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navigation = [
  ['Project Atlas', '/atlas'], ['Robotics', '/robotics'], ['Orbital', '/orbital'],
  ['Display', '/display'], ['FastSoftware', '/fastsoftware'], ['About', '/about'],
]
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const heroOverlay = (location.pathname === '/' || location.pathname === '/atlas' || ['/infrastructure', '/infrastructure/europe', '/infrastructure/atlas'].includes(location.pathname)) && !scrolled && !mobileMenuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!mobileMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    menuRef.current?.querySelector('a')?.focus()
    const close = () => { setMobileMenuOpen(false); toggleRef.current?.focus() }
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'Tab') {
        const links = [...(menuRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])]
        const first = toggleRef.current
        const last = links.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    const media = window.matchMedia('(min-width: 1024px)')
    const resize = () => { if (media.matches) setMobileMenuOpen(false) }
    media.addEventListener('change', resize)
    window.addEventListener('keydown', keyboard)
    return () => { document.body.style.overflow = previousOverflow; media.removeEventListener('change', resize); window.removeEventListener('keydown', keyboard) }
  }, [mobileMenuOpen])
  const linkClass = ({ isActive }: { isActive: boolean }) => `inline-flex min-h-11 items-center border-b transition-colors ${isActive ? 'border-current' : 'border-transparent'} ${heroOverlay ? 'text-white/90 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'}`
  return <header className={`sticky top-0 z-50 border-b transition-colors duration-200 ${heroOverlay ? 'border-white/15 bg-transparent text-white' : 'border-zinc-200 bg-white/95 text-zinc-950 backdrop-blur-lg'}`}>
    <nav aria-label="Main navigation" className="company-container flex h-[73px] items-center justify-between gap-8">
      <Link to="/" onClick={() => setMobileMenuOpen(false)} aria-label="Albedo Industries home" className="flex min-h-11 shrink-0 flex-col justify-center"><span className="text-xl font-semibold leading-none tracking-[-.04em]">ALBEDO</span><span className="mt-1.5 text-[8px] font-semibold tracking-[.26em]">INDUSTRIES</span></Link>
      <div className="hidden items-center gap-6 text-xs font-medium lg:flex">{navigation.map(([name, to]) => <NavLink key={to} to={to} className={linkClass}>{name}{to === '/robotics' && <span className={`ml-1.5 h-1 w-1 rounded-full ${heroOverlay ? 'bg-amber-200' : 'bg-amber-700'}`} aria-label="New division" />}</NavLink>)}<Link to="/support#partnerships" className={`inline-flex min-h-11 items-center gap-4 px-5 text-xs font-semibold ${heroOverlay ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white'}`}>Partner with us <ArrowUpRight /></Link></div>
      <button ref={toggleRef} type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center gap-3 text-xs font-semibold lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} aria-controls="site-mobile-menu"><span>{mobileMenuOpen ? 'Close' : 'Menu'}</span><svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" strokeLinecap="round" d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} /></svg></button>
    </nav>
    {mobileMenuOpen && <div ref={menuRef} id="site-mobile-menu" className="absolute inset-x-0 top-full max-h-[calc(100dvh-73px)] overflow-y-auto border-b border-zinc-300 bg-white px-6 pb-8 pt-3 text-zinc-950 shadow-lg lg:hidden"><nav aria-label="Mobile navigation" className="mx-auto max-w-xl">{navigation.map(([name, to]) => <NavLink key={to} to={to} className="flex min-h-14 items-center justify-between border-b border-zinc-200 text-lg" onClick={() => setMobileMenuOpen(false)}>{name}<span className="flex items-center gap-3 text-xs text-zinc-500">{to === '/robotics' && 'New division'}<ArrowUpRight /></span></NavLink>)}<Link to="/support#partnerships" className="company-button mt-6 w-full" onClick={() => setMobileMenuOpen(false)}>Partner with us <ArrowUpRight /></Link><Link to="/support" className="company-text-link mt-3" onClick={() => setMobileMenuOpen(false)}>Contact Albedo</Link></nav></div>}
  </header>
}
