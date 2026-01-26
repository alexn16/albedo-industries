import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-100 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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
                <Link to="/projects/ardyn-fitness" className="hover:text-zinc-900 transition-colors">
                  Ardyn Fitness
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link to="/support" className="hover:text-zinc-900 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@albedo.industries" className="hover:text-zinc-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link to="/privacy" className="hover:text-zinc-900 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-zinc-900 transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-zinc-900 transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>&copy; {currentYear} ALBEDO Industries. All rights reserved.</p>
          <p>Building quietly, shipping steadily.</p>
        </div>
      </div>
    </footer>
  )
}
