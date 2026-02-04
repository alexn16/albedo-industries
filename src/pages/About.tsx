import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            About ALB Industries
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            We design and build personalized software systems as fast as possible for individuals
            and companies. No hype, no empty promises. Just working systems that solve real problems.
          </p>
        </div>
      </section>

      {/* Core Idea */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                The Core Idea
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                Traditional software is slow, generic, and rigid. A company identifies an
                operational problem. They search for software. They find options that partially
                fit. They spend months implementing. They adapt their processes to the software
                instead of the other way around. Years later, they're still working around
                limitations that were obvious from day one.
              </p>
              <p>
                ALB Industries reduces the time between a real operational problem and a working
                software solution. We build vertical platforms and custom systems using automation,
                optimization, simulation, and artificial intelligence as an assistive layer.
              </p>
              <p>
                Our goal is not to replace people. Our goal is to remove friction from work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Fast Software Means */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                What Fast Software Means
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                Fast doesn't mean rushed. Fast means reducing the delay between understanding
                a problem and having software that addresses it. Most enterprise software
                projects take 12-24 months before delivering meaningful value. We target
                weeks to initial deployment, with continuous refinement from there.
              </p>
              <p>
                Speed comes from several choices: we use modern tooling that eliminates
                boilerplate. We design modular systems that can be extended without rewriting.
                We work closely with the people who will use the software, not just the people
                who sign contracts. We ship incrementally and adjust based on reality.
              </p>
              <p>
                Most importantly, we don't build features no one asked for. Every piece of
                functionality exists because someone needs it to do their work. When you remove
                speculative features, software gets built faster and stays maintainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Personalization Matters */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Why Personalization Matters
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                Generic software optimizes for the broadest possible market. It adds features
                to satisfy more buyers. It becomes complex because it tries to handle every
                possible workflow. Users learn to ignore 80% of what they see on screen.
              </p>
              <p>
                Personalized software matches how you actually work. It doesn't force you to
                adopt someone else's process. It doesn't bury the actions you take constantly
                under menus designed for features you'll never touch. It presents exactly
                what you need, organized the way your work actually flows.
              </p>
              <p>
                This isn't about custom development being better than products. It's about
                recognizing that different industries, different company sizes, and different
                operational models require different software. A construction company doesn't
                work like a restaurant. A 10-person team doesn't work like a 500-person
                organization. Software should reflect these differences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sector Operations */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Across Multiple Sectors
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                ALB Industries operates across construction, hospitality, fitness, financial
                information, and urban infrastructure. Each sector has unique operational
                problems, but they share common patterns: data that doesn't flow where it's
                needed, decisions made with incomplete information, manual processes that
                could be automated, and tools that create work instead of reducing it.
              </p>
              <p>
                Working across sectors is not about spreading thin. It's about pattern recognition.
                Solutions developed for material tracking in construction inform inventory
                management in restaurants. Scheduling optimization for fitness training applies
                to crew coordination on construction sites. The underlying problems are often
                similar even when the domains look different.
              </p>
              <p>
                Each product we build adds to a shared foundation: authentication systems,
                notification infrastructure, real-time data synchronization, mobile offline
                capabilities. New products benefit from this foundation instead of building
                everything from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Scales */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Why This Approach Scales
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                Generic software scales by adding features. That makes it more complex and
                harder to use. Personalized software scales by going deeper into specific
                workflows. The more we understand a domain, the more value we can add
                without adding complexity.
              </p>
              <p>
                This creates a different growth trajectory. Instead of chasing every possible
                customer, we focus on customers whose problems we understand deeply. They
                get better software. We get clearer direction. The relationship is sustainable
                because both sides benefit from continued investment.
              </p>
              <p>
                Traditional enterprise software vendors grow by acquiring more customers for
                the same product. We grow by solving harder problems for customers who stay
                with us because the software keeps getting better at what they actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-12">
            How We Build
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h3 className="text-lg font-medium mb-2">Automation</h3>
              <p className="text-zinc-600 leading-relaxed">
                Repetitive tasks get automated. Data entry, report generation, status updates,
                notifications. Anything that follows predictable rules gets handled by the system.
                People focus on decisions that require judgment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Optimization</h3>
              <p className="text-zinc-600 leading-relaxed">
                When there are multiple ways to do something, the system finds better approaches.
                Cutting layouts that minimize waste. Schedules that reduce conflicts. Routes that
                save time. Algorithms handle the combinatorics humans can't track.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Simulation</h3>
              <p className="text-zinc-600 leading-relaxed">
                Before committing to a decision, see what happens next. Model schedule changes.
                Project cash flow. Anticipate bottlenecks. Simulation turns "let's see what
                happens" into "let's understand the options first."
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">AI as Assistance</h3>
              <p className="text-zinc-600 leading-relaxed">
                AI helps understand complex information, surfaces relevant context, and
                highlights what needs attention. It does not make decisions for you. It makes
                decision-makers more informed.
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

      {/* Operating Model */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Operating Model
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                ALB Industries functions as a startup studio with a long-term holding mentality.
                New products are developed internally, validated with real users, and either
                grown into standalone offerings or sunset if they don't find meaningful traction.
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
                Our ambition is to prove that a different model works. That small teams can build
                meaningful products. That independence is compatible with success. That patience
                is a competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
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
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Interested in what we're building?</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Explore our current projects or reach out if you'd like to learn more about
              how ALB Industries can help solve your operational problems.
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
