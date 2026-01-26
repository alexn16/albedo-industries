import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            About ALBEDO
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            We build software products that solve genuine problems. No hype, no empty promises.
            Just useful tools, built carefully and improved continuously.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Why We Exist
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                ALBEDO Industries exists because we believe there's a better way to build
                software companies. The dominant model in tech pushes for rapid growth, massive
                funding rounds, and exit-driven thinking. That model works for some, but it
                often leads to products that prioritize metrics over users.
              </p>
              <p>
                We wanted to build differently. To start with problems we genuinely cared about,
                develop solutions without artificial urgency, and create products that could
                sustain themselves through the value they provide rather than the capital
                they consume.
              </p>
              <p>
                ALBEDO is intentionally structured as a holding company that operates multiple
                products. This lets us diversify risk, share resources across projects, and
                maintain a portfolio approach to product development. Some ideas will succeed,
                others won't. The structure allows us to keep building regardless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                How We Operate
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                We function as a startup studio, but with a long-term holding mentality. New
                products are developed internally, validated with real users, and either grown
                into standalone offerings or sunset if they don't find meaningful traction.
              </p>
              <p>
                Each product operates with significant autonomy while benefiting from shared
                infrastructure, design systems, and operational knowledge. This lets small
                teams move quickly without rebuilding everything from scratch.
              </p>
              <p>
                We're deliberately small and plan to stay that way. A focused team can maintain
                quality and move faster than a large organization. We hire carefully, compensate
                fairly, and expect sustained excellence rather than burnout-inducing sprints.
              </p>
              <p>
                Financially, we aim for profitability at the product level. We're not opposed to
                outside investment in specific products if it makes strategic sense, but the
                holding company itself is designed to be self-sustaining through the products
                it operates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Long-term Vision
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                In ten years, we want to be operating a portfolio of profitable, useful products
                that people genuinely appreciate. Not the biggest company, not the fastest
                growing, but one that consistently delivers value and remains a good place to
                work.
              </p>
              <p>
                We measure success differently than most. User satisfaction matters more than
                user count. Revenue quality matters more than revenue growth. The ability to
                keep building for another decade matters more than short-term metrics.
              </p>
              <p>
                We're playing an infinite game, not a finite one. The goal isn't to win and
                cash out. It's to keep playing, keep building, and keep improving for as long
                as we can.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            What We Value
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h3 className="text-lg font-medium mb-2">Clarity over cleverness</h3>
              <p className="text-zinc-600 leading-relaxed">
                Simple solutions that people understand beat sophisticated ones they don't.
                We write clear code, design obvious interfaces, and communicate plainly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Quality over speed</h3>
              <p className="text-zinc-600 leading-relaxed">
                We'd rather ship something good next month than something mediocre today.
                Technical debt and design shortcuts compound over time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Honesty over polish</h3>
              <p className="text-zinc-600 leading-relaxed">
                We're direct about what our products can and can't do. No inflated claims,
                no misleading marketing. Trust is built through transparency.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Sustainability over growth</h3>
              <p className="text-zinc-600 leading-relaxed">
                We optimize for the ability to keep building, not for growth metrics that
                look good in pitch decks. Steady progress beats volatile sprints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Interested in what we're building?</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Explore our current projects or reach out if you'd like to learn more about
              ALBEDO Industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                View our projects
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
