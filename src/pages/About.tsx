import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            About ALBEDO Industries
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            ALBEDO Industries builds practical infrastructure for companies: custom software and AI agents, smart parking and EV access systems, vehicle security tools, and local AI boxes for private workflows.
          </p>
        </div>
      </section>

      {/* Core Idea */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                The Infrastructure Thesis
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                Companies, buildings and small operators already own useful assets: processes, parking spaces, EV chargers, gates, cameras, documents and local compute. Most of those assets remain disconnected, manual or difficult to monetize.
              </p>
              <p>
                ALBEDO starts with software because most infrastructure problems begin as workflow problems: purchasing, stock, invoices, access permissions, alerts and reporting. From there, the software connects to parking gates, cameras, EV sockets and local compute boxes when the operation needs physical control.
              </p>
              <p>
                Our goal is practical infrastructure: systems that companies can deploy, measure and operate without waiting on slow enterprise software cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Lines of Work */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Three Lines of Work
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                FastSoftware is the most immediate line: internal tools delivered in weeks, not months. We build lightweight ERPs, purchasing agents, stock and operations dashboards, email or order automation, invoice review and reporting agents around the way a company already works.
              </p>
              <p>
                Mobility Infrastructure starts with ALB Parking for reservations, access control, camera verification and operator dashboards. ALB EV Guardian is the related layer for EV charging consumption, socket usage and vehicle-security alerts.
              </p>
              <p>
                Albedo Nodes is developing local AI boxes for private company agents, document processing, storage and edge compute. The longer-term research path is a future network where node owners may monetize unused capacity.
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
                From Operations to Infrastructure
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                These lines belong together because the same operational problems repeat across sectors: a company needs software, the software needs access to real assets, and sensitive work often benefits from local processing.
              </p>
              <p>
                Foreman and Germet strengthen the FastSoftware layer. ALB Parking and EV Guardian anchor mobility infrastructure. Albedo Nodes extends the same operating logic into private AI and local compute. Consumer products remain experiments where focused software can still teach useful patterns.
              </p>
              <p>
                Shared foundations still matter: authentication, notifications, dashboards, mobile interfaces, event logs, integrations and agent environments. Each deployment improves the next.
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
                ALBEDO Industries functions as an intelligent infrastructure company with a long-term builder mentality.
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
