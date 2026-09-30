import { NavLink } from 'react-router-dom'

const links = [
  ['/atlas/foundation', 'Overview'],
  ['/atlas/foundation/programme', 'Regional Development Programme'],
  ['/atlas/foundation/locations', 'Location Plans'],
] as const

export default function FoundationNav() {
  return <nav aria-label="Atlas Foundation" className="border-b border-white/10 bg-zinc-950 text-white">
    <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 sm:px-6">
      {links.map(([to, label]) => <NavLink end={to === '/atlas/foundation'} className={({ isActive }) => `flex min-h-10 shrink-0 items-center px-3 text-xs font-semibold ${isActive ? 'bg-white text-zinc-950' : 'text-zinc-400 hover:text-white'}`} key={to} to={to}>{label}</NavLink>)}
    </div>
  </nav>
}
