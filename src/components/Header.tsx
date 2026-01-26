import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`

  return (
    <header className="border-b border-zinc-100">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          ALBEDO
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/updates" className={linkClass}>
            Updates
          </NavLink>
          <NavLink to="/support" className={linkClass}>
            Support
          </NavLink>
          <a
            href="mailto:hello@albedo.industries"
            className="ml-4 px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
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

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 px-6 py-4 space-y-4">
          <NavLink
            to="/about"
            className={`block ${linkClass({ isActive: false })}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={`block ${linkClass({ isActive: false })}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/updates"
            className={`block ${linkClass({ isActive: false })}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Updates
          </NavLink>
          <NavLink
            to="/support"
            className={`block ${linkClass({ isActive: false })}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Support
          </NavLink>
          <a
            href="mailto:hello@albedo.industries"
            className="block w-full text-center px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
