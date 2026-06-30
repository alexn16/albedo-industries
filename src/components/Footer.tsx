import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 mt-auto bg-zinc-950 text-zinc-400">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-lg font-semibold tracking-tight text-white">
              ALBEDO
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              Intelligent infrastructure for software, mobility and compute.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-zinc-300">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/updates" className="hover:text-white transition-colors">Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-zinc-300">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/fastsoftware" className="hover:text-white transition-colors">FastSoftware</Link></li>
              <li><Link to="/projects/alb-parking" className="hover:text-white transition-colors">ALB Parking</Link></li>
              <li><Link to="/projects/alb-ev-guardian" className="hover:text-white transition-colors">ALB EV Guardian</Link></li>
              <li><Link to="/projects/albedo-nodes" className="hover:text-white transition-colors">Albedo Nodes</Link></li>
              <li><Link to="/projects/ardyn-fitness" className="hover:text-white transition-colors">Ardyn Fitness</Link></li>
              <li><Link to="/projects/germet" className="hover:text-white transition-colors">Germet</Link></li>
              <li><Link to="/foreman" className="hover:text-white transition-colors">Foreman</Link></li>
              <li><Link to="/projects/aperta" className="hover:text-white transition-colors">Aperta</Link></li>
              <li><Link to="/projects/alphaclaim" className="hover:text-white transition-colors">Alphaclaim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-zinc-300">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-zinc-300">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:albparking@gmail.com?subject=ALBEDO%20Industries%20inquiry&body=Hi%20ALBEDO%2C%0A%0AI%E2%80%99d%20like%20to%20get%20in%20touch%20about%20ALBEDO%20Industries.%0A%0ATopic%3A%0A%0ACompany%20%2F%20project%3A%0A%0AThanks." className="hover:text-white transition-colors">albparking@gmail.com</a></li>
              <li className="text-xs leading-relaxed text-zinc-500">Temporary contact while dedicated ALBEDO channels are being prepared.</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; {currentYear} ALBEDO Industries. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:albparking@gmail.com?subject=ALBEDO%20Industries%20inquiry&body=Hi%20ALBEDO%2C%0A%0AI%E2%80%99d%20like%20to%20get%20in%20touch%20about%20ALBEDO%20Industries.%0A%0ATopic%3A%0A%0ACompany%20%2F%20project%3A%0A%0AThanks." className="hover:text-zinc-300 transition-colors">
              albparking@gmail.com
            </a>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-zinc-600">Building quietly, shipping steadily.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
