export default function Security() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Security
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            How we approach security and protect your data. No inflated claims, just honest
            practices and continuous improvement.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl space-y-12">
            <div>
              <h2 className="text-xl font-medium mb-4">Our Philosophy</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We approach security pragmatically. We're a small team building software
                products, not a security company. We implement solid, proven practices
                rather than chasing every new security trend.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                We believe in being honest about what we do and don't do. We won't claim
                to have military-grade encryption or impenetrable defenses. Instead, we'll
                tell you the concrete steps we take to protect your data and be upfront
                about our limitations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">What We Do</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">Encryption in Transit</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    All communication between your devices and our servers uses TLS encryption.
                    We enforce HTTPS across all our products and services.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">Encryption at Rest</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Data stored on our servers is encrypted. Database backups are encrypted.
                    We use industry-standard encryption methods and key management practices.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">Password Security</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Passwords are hashed using modern algorithms (bcrypt or Argon2, depending
                    on the product). We never store passwords in plain text and cannot retrieve
                    them even if asked.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">Infrastructure</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Our products run on reputable cloud infrastructure providers with their
                    own security certifications and practices. We keep systems updated and
                    monitor for known vulnerabilities in our dependencies.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">Access Control</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Access to production systems is restricted and logged. Team members have
                    the minimum access necessary to do their jobs. We use multi-factor
                    authentication internally.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 mb-2">Regular Updates</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    We regularly update our software dependencies and address security patches
                    promptly. Critical security updates are prioritized above feature work.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">What We Don't Do</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We believe in honest communication about our capabilities. Here's what we
                don't currently do:
              </p>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>We don't have SOC 2 or ISO 27001 certification (yet)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>We don't conduct regular third-party penetration testing (we do it periodically)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>We don't have a 24/7 security operations center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>We can't guarantee zero downtime or perfect uptime</span>
                </li>
              </ul>
              <p className="text-zinc-600 leading-relaxed mt-4">
                If these capabilities are requirements for your use case, our products may
                not be the right fit. We'd rather be upfront than oversell.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">Data Philosophy</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Our approach to data is simple: collect only what's necessary, store it
                securely, and delete it when it's no longer needed.
              </p>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>
                    <strong className="text-zinc-900">Minimal Collection:</strong> We don't
                    collect data speculatively. If we don't need it to provide the service,
                    we don't ask for it.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>
                    <strong className="text-zinc-900">Clear Purpose:</strong> For any data
                    we do collect, there's a specific reason tied to product functionality
                    or legitimate business needs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>
                    <strong className="text-zinc-900">Your Data is Yours:</strong> We don't
                    sell your data or use it for purposes beyond operating our products.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>
                    <strong className="text-zinc-900">Deletion on Request:</strong> If you
                    delete your account, we delete your personal data. Some data may be
                    retained for legal or legitimate business purposes, but we'll be clear
                    about what and why.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">Reporting Security Issues</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                If you discover a security vulnerability in any of our products, we want
                to know about it. Please report security issues to:
              </p>
              <p className="text-zinc-900 mb-4">
                security@albedo.industries
              </p>
              <p className="text-zinc-600 leading-relaxed">
                We ask that you give us reasonable time to investigate and address the issue
                before public disclosure. We don't currently have a formal bug bounty program,
                but we appreciate responsible disclosure and will acknowledge your contribution
                if you'd like.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">Your Responsibilities</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Security is a shared responsibility. You can help protect your account by:
              </p>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>Using a strong, unique password for your account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>Enabling two-factor authentication if available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>Keeping your devices and browsers updated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>Being cautious about phishing attempts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-400 mr-3">-</span>
                  <span>Reporting suspicious activity to us promptly</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">Questions</h2>
              <p className="text-zinc-600 leading-relaxed">
                If you have questions about our security practices or want more detail about
                how we protect data for a specific product, reach out to us at
                security@albedo.industries. We're happy to discuss.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
