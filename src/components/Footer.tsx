import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-100 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-lg font-semibold tracking-tight">
              ALBEDO
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              Building focused products for real-world problems.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link to="/about" className="hover:text-zinc-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-zinc-900 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/updates" className="hover:text-zinc-900 transition-colors">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link to="/projects/alb-parking" className="hover:text-zinc-900 transition-colors">
                  ALB Parking
                </Link>
              </li>
              <li>
                <Link to="/projects/foreman" className="hover:text-zinc-900 transition-colors">
                  Foreman
                </Link>
              </li>
              <li>
                <Link to="/projects/aperta" className="hover:text-zinc-900 transition-colors">
                  Aperta
                </Link>
              </li>
              <li>
                <Link to="/projects/alphaclaim" className="hover:text-zinc-900 transition-colors">
                  Alphaclaim
                </Link>
              </li>
              <li>
                <Link to="/projects/beatflow" className="hover:text-zinc-900 transition-colors">
                  BeatFlow
                </Link>
              </li>
              <li>
                <Link to="/projects/ardyn-fitness" className="hover:text-zinc-900 transition-colors">
                  Ardyn Fitness
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link to="/privacy" className="hover:text-zinc-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-zinc-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-zinc-900 transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <a href="mailto:hello@albedo.industries" className="hover:text-zinc-900 transition-colors">
                  General
                </a>
              </li>
              <li>
                <a href="mailto:support@albedo.industries" className="hover:text-zinc-900 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="mailto:partnerships@albedo.industries" className="hover:text-zinc-900 transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="mailto:investors@albedo.industries" className="hover:text-zinc-900 transition-colors">
                  Investors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>&copy; {currentYear} ALBEDO Industries. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@albedo.industries" className="hover:text-zinc-600 transition-colors">
              hello@albedo.industries
            </a>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">Building quietly, shipping steadily.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
