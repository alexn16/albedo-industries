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

      {/* Thesis */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Our Thesis
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                We believe the best software companies solve specific problems for specific people,
                rather than chasing the largest possible market. When you focus on a defined problem
                space, you can build something genuinely useful instead of a mediocre solution that
                tries to do everything.
              </p>
              <p>
                ALBEDO builds in categories where existing solutions are either too complex for
                their users, too expensive for their value, or simply absent. We look for problems
                that are meaningful but overlooked by venture-scale thinking. Not every good business
                needs to become a billion-dollar company.
              </p>
              <p>
                Our portfolio spans consumer and B2B, but all our products share common traits:
                they're opinionated about what they do, they respect their users' time and attention,
                and they're built to be sustainable businesses rather than growth experiments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
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

      {/* Principles */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h3 className="text-lg font-medium mb-2">Clarity over cleverness</h3>
              <p className="text-zinc-600 leading-relaxed">
                Simple solutions that people understand beat sophisticated ones they don't.
                We write clear code, design obvious interfaces, and communicate plainly.
                If something requires explanation, we simplify it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Quality over speed</h3>
              <p className="text-zinc-600 leading-relaxed">
                We'd rather ship something good next month than something mediocre today.
                Technical debt and design shortcuts compound over time. We invest in getting
                things right because we plan to maintain them for years.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Honesty over polish</h3>
              <p className="text-zinc-600 leading-relaxed">
                We're direct about what our products can and can't do. No inflated claims,
                no misleading marketing. Trust is built through transparency. We'd rather
                under-promise and over-deliver.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Sustainability over growth</h3>
              <p className="text-zinc-600 leading-relaxed">
                We optimize for the ability to keep building, not for growth metrics that
                look good in pitch decks. Steady progress beats volatile sprints. We measure
                success in years, not quarters.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Focus over features</h3>
              <p className="text-zinc-600 leading-relaxed">
                Every product does one thing well instead of many things poorly. We say no
                to most feature requests. The best products are defined as much by what they
                don't do as by what they do.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Users over metrics</h3>
              <p className="text-zinc-600 leading-relaxed">
                We build for the people who use our products, not for dashboards. Engagement
                metrics can be gamed. User satisfaction can't. We'd rather have fewer happy
                users than more indifferent ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Evaluate Ideas */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                How We Evaluate Ideas
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-zinc-600 leading-relaxed mb-8">
                Not every problem is worth solving, and not every solution is worth building.
                Before committing resources to a new product, we ask:
              </p>
              <ul className="space-y-4 text-zinc-600">
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3 font-medium">1.</span>
                  <span><strong className="text-zinc-900">Is this a real problem?</strong> Have we observed it repeatedly in the world, or are we imagining a market that doesn't exist?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3 font-medium">2.</span>
                  <span><strong className="text-zinc-900">Why hasn't it been solved?</strong> If the problem is real, why do current solutions fall short? Is there a structural reason we can address?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3 font-medium">3.</span>
                  <span><strong className="text-zinc-900">Can we build it?</strong> Do we have the skills and resources to create something meaningfully better, or are we out of our depth?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3 font-medium">4.</span>
                  <span><strong className="text-zinc-900">Is the market reachable?</strong> Can we get the product to the people who need it without unsustainable marketing spend?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3 font-medium">5.</span>
                  <span><strong className="text-zinc-900">Will it sustain itself?</strong> Is there a plausible path to profitability, or does success require indefinite subsidy?</span>
                </li>
              </ul>
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
                as we can. That means staying disciplined about what we take on and how we grow.
              </p>
              <p>
                Our ambition is to prove that a different model works. That small teams can build
                meaningful products. That independence is compatible with success. That patience
                is a competitive advantage.
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

      {/* Contact */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Contact
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-2">General inquiries</h3>
                  <a href="mailto:hello@albedo.industries" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                    hello@albedo.industries
                  </a>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Partnerships</h3>
                  <a href="mailto:partnerships@albedo.industries" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                    partnerships@albedo.industries
                  </a>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Investors</h3>
                  <a href="mailto:investors@albedo.industries" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                    investors@albedo.industries
                  </a>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Press</h3>
                  <a href="mailto:press@albedo.industries" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                    press@albedo.industries
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
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
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-white transition-colors"
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
