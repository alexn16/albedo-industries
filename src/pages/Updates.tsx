import { Link } from 'react-router-dom'

interface Update {
  date: string
  title: string
  category: 'Company' | 'Product' | 'Milestone'
  description: string
  link?: {
    text: string
    to: string
  }
}

const updates: Update[] = [
  {
    date: '2026-01-15',
    title: 'Foreman enters pilot program',
    category: 'Product',
    description: 'Foreman, our construction job management tool, is now in active pilot with 15 construction teams. Early feedback is helping us refine the offline-first experience and photo documentation features.',
    link: {
      text: 'Learn about Foreman',
      to: '/projects/foreman'
    }
  },
  {
    date: '2026-01-10',
    title: 'ALB Parking expands to 12 markets',
    category: 'Milestone',
    description: 'ALB Parking is now live in 12 markets, up from 8 at the end of last year. We\'re focusing on deepening operator partnerships and improving real-time availability accuracy.',
    link: {
      text: 'Learn about ALB Parking',
      to: '/projects/alb-parking'
    }
  },
  {
    date: '2026-01-05',
    title: 'Website redesign launched',
    category: 'Company',
    description: 'We\'ve refreshed the ALBEDO Industries website with clearer information about our thesis, operating model, and portfolio. Each product page now includes detailed memos on problem, solution, and business model.',
  },
  {
    date: '2025-12-20',
    title: 'Ardyn Fitness concept validation begins',
    category: 'Product',
    description: 'We\'ve started user research for Ardyn Fitness, our adaptive strength training concept. Currently conducting interviews with 50+ potential users to validate assumptions about fitness app frustrations.',
    link: {
      text: 'Learn about Ardyn Fitness',
      to: '/projects/ardyn-fitness'
    }
  },
  {
    date: '2025-12-01',
    title: 'ALBEDO Industries founded',
    category: 'Company',
    description: 'We officially launched ALBEDO Industries as an independent software holding company. Our thesis: build focused products that solve specific problems, run them as sustainable businesses, and take a long-term view on growth.',
    link: {
      text: 'Read our thesis',
      to: '/about'
    }
  },
]

export default function Updates() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Company':
        return 'bg-zinc-100 text-zinc-600'
      case 'Product':
        return 'bg-blue-50 text-blue-700'
      case 'Milestone':
        return 'bg-green-50 text-green-700'
      default:
        return 'bg-zinc-100 text-zinc-600'
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Updates
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            What we're working on, shipping, and thinking about. No vanity metrics or
            inflated claims. Just honest updates on our progress.
          </p>
        </div>
      </section>

      {/* Updates List */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="space-y-12">
            {updates.map((update, index) => (
              <article key={index} className="border-l-2 border-zinc-200 pl-6 relative">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-zinc-300" />
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <time className="text-sm text-zinc-400">{formatDate(update.date)}</time>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getCategoryColor(update.category)}`}>
                    {update.category}
                  </span>
                </div>
                <h2 className="text-xl font-medium mb-3">{update.title}</h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  {update.description}
                </p>
                {update.link && (
                  <Link
                    to={update.link.to}
                    className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    {update.link.text}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Stay informed</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              We don't have a newsletter (yet), but you can reach out directly if you'd like
              to stay updated on ALBEDO's progress or discuss what we're building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@albedo.industries?subject=Keep me updated"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                Get in touch
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-white transition-colors"
              >
                Explore projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
