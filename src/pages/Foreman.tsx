import { Link } from 'react-router-dom'

export default function Foreman() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Projects
          </Link>
        </div>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-50 text-blue-700">
              Building
            </span>
            <span className="text-sm text-zinc-400">B2B</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            Foreman
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed mb-2">
            A construction operating system, not a traditional ERP.
          </p>
          <p className="text-lg text-zinc-500">
            Built for how construction actually works: projects evolve daily, priorities shift,
            materials move, and teams need clarity in real time.
          </p>
        </div>
      </section>

      {/* Why ERPs Fail Construction */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                The Problem with ERPs
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                Traditional ERPs were designed for manufacturing and retail. Those are environments where
                processes repeat predictably and inventory sits in warehouses. Construction
                operates differently. Every project is unique. Sites change daily. Materials
                arrive when they arrive. Weather delays work. Subcontractors have their own
                schedules. Priorities shift based on what the client decides this morning.
              </p>
              <p>
                ERPs assume you can define processes upfront and then execute them. Construction
                requires systems that adapt continuously. When project managers spend more time
                updating software than managing projects, something is wrong with the software.
              </p>
              <p>
                Construction companies don't fail because they lack data. They fail because the
                data they have doesn't connect to the decisions they need to make right now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Living Systems Approach */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Projects as Living Systems
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p>
                Foreman models construction projects as living systems, not static plans. Every
                project has works in progress, each with its own status, materials, and dependencies.
                When something changes (a delivery is delayed, a crew is reassigned, a client
                requests a modification) the system shows you what that change affects.
              </p>
              <p>
                Priorities are explicit, not assumed. You can see which works are urgent, which
                are blocked, and which are waiting for materials. The system surfaces conflicts
                before they become problems on site.
              </p>
              <p>
                Materials flow through the system from supplier quotes to warehouse to site to
                installation. You don't have to guess what's available. You can see it, in real
                time, across all your projects.
              </p>

              {/* Visual suggestion */}
              <div className="mt-8 p-6 bg-white border border-zinc-200 rounded-lg">
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-3">Visual Concept</p>
                <p className="text-sm text-zinc-500">
                  Diagram showing a project as a network: works, materials, and dependencies connected.
                  Color-coded status indicators. Timeline showing how changes propagate through the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Header */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Four integrated modules
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Foreman is modular by design. Each module solves a specific problem, but they work
              together. Data flows between them without manual transfer. Decisions in one module
              inform priorities in others.
            </p>
          </div>
        </div>
      </section>

      {/* Module 1: Foreman Core */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-zinc-900 text-white rounded-lg text-sm font-medium mb-4">
                01
              </div>
              <h2 className="text-xl font-semibold mb-2">Foreman Core</h2>
              <p className="text-sm text-zinc-500">The ERP layer</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                The operational backbone. Projects, suppliers, budgets, and works in progress,
                all visible in one place. Foreman Core replaces the spreadsheets, whiteboards, and
                disconnected tools that most construction companies rely on.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Projects</h3>
                  <p className="text-sm text-zinc-500">
                    Every project with its works, timelines, and status. Drill down from overview
                    to specific tasks in seconds.
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Suppliers</h3>
                  <p className="text-sm text-zinc-500">
                    Your supplier relationships, pricing agreements, and delivery history.
                    Compare options when planning new work.
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Budgets</h3>
                  <p className="text-sm text-zinc-500">
                    Track costs against budgets at the project and work level. See where
                    you're on track and where overruns are developing.
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Works in Progress</h3>
                  <p className="text-sm text-zinc-500">
                    Every active work item with its status, assigned crew, materials needed,
                    and dependencies on other works.
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg sm:col-span-2">
                  <h3 className="font-medium mb-2">Real-time Visibility</h3>
                  <p className="text-sm text-zinc-500">
                    Dashboards that show what's happening now, not what the plan said would
                    happen. Updated as crews report from the field.
                  </p>
                </div>
              </div>

              {/* Visual suggestion */}
              <div className="mt-8 p-6 bg-white border border-zinc-200 rounded-lg">
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-3">Visual Concept</p>
                <p className="text-sm text-zinc-500">
                  Screenshot of the Foreman Core dashboard: project cards with status indicators,
                  budget progress bars, and urgent items highlighted. Clean, scannable, no clutter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: Foreman Email */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-zinc-900 text-white rounded-lg text-sm font-medium mb-4">
                02
              </div>
              <h2 className="text-xl font-semibold mb-2">Foreman Email</h2>
              <p className="text-sm text-zinc-500">Communication connected to work</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Construction runs on email. Supplier quotes arrive in inboxes. Client change
                requests come through messages. Crew updates happen over threads. The problem
                is not email itself. It's that none of this communication connects to your projects.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Foreman Email bridges the gap between unstructured communication and structured
                execution. It links email threads to specific projects and works, extracts
                relevant information, and ensures context isn't lost when conversations happen
                outside the system.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
                  <div className="w-8 h-8 bg-white border border-zinc-200 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Project-linked threads</h3>
                    <p className="text-sm text-zinc-500">
                      Emails automatically associate with relevant projects based on content,
                      contacts, and subject patterns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
                  <div className="w-8 h-8 bg-white border border-zinc-200 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Information extraction</h3>
                    <p className="text-sm text-zinc-500">
                      Supplier quotes, delivery dates, and specification changes are identified
                      and surfaced for quick action.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
                  <div className="w-8 h-8 bg-white border border-zinc-200 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Context preservation</h3>
                    <p className="text-sm text-zinc-500">
                      When you open a work item, you can see all related communication.
                      No more searching through inboxes to understand what was agreed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual suggestion */}
              <div className="mt-8 p-6 bg-white border border-zinc-200 rounded-lg">
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-3">Visual Concept</p>
                <p className="text-sm text-zinc-500">
                  Split view: work item on the left with details, linked email thread on the
                  right with extracted information highlighted. Visual connection between
                  unstructured communication and structured project data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 3: Foreman CNC Optimization */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-zinc-900 text-white rounded-lg text-sm font-medium mb-4">
                03
              </div>
              <h2 className="text-xl font-semibold mb-2">Foreman CNC</h2>
              <p className="text-sm text-zinc-500">Cutting optimization</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Material waste is margin loss. When cutting plates, wood, aluminum, or steel,
                how you arrange cuts determines how much material ends up in the scrap bin.
                Foreman CNC optimizes cutting layouts to reduce waste and connects production
                planning directly to project priorities.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Layout optimization</h3>
                  <p className="text-sm text-zinc-500">
                    Algorithms that arrange cuts to minimize waste across plates, sheets,
                    and stock material. Supports complex shapes and grain direction constraints.
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Dynamic job reorganization</h3>
                  <p className="text-sm text-zinc-500">
                    When project priorities change, cutting schedules adjust. Urgent items
                    move up automatically while maintaining material efficiency.
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Multi-project batching</h3>
                  <p className="text-sm text-zinc-500">
                    Combine cuts from multiple projects onto the same material sheets.
                    What's waste in one project might be perfect for another.
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Production integration</h3>
                  <p className="text-sm text-zinc-500">
                    Connects CNC machines to project schedules. Operators see what to
                    cut next based on real priorities, not stale work orders.
                  </p>
                </div>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Typical construction shops operate cutting independently from project management.
                Foreman CNC closes that gap. When a project becomes urgent, the production
                floor knows immediately.
              </p>

              {/* Visual suggestion */}
              <div className="mt-8 p-6 bg-white border border-zinc-200 rounded-lg">
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-3">Visual Concept</p>
                <p className="text-sm text-zinc-500">
                  Cutting layout diagram showing parts nested efficiently on a plate.
                  Color-coded by project. Waste percentage indicator. Before/after comparison
                  showing material savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 4: Foreman PDA */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-zinc-900 text-white rounded-lg text-sm font-medium mb-4">
                04
              </div>
              <h2 className="text-xl font-semibold mb-2">Foreman PDA</h2>
              <p className="text-sm text-zinc-500">Warehouse and site mobile</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                The office has dashboards. The warehouse needs a PDA. Foreman PDA is the mobile
                interface for workers who handle materials, manage stock, and work on site.
                It's designed for real conditions: gloved hands, bright sunlight, intermittent
                connectivity.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
                  <div className="w-8 h-8 bg-white border border-zinc-200 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Real-time stock visibility</h3>
                    <p className="text-sm text-zinc-500">
                      See what's in the warehouse, what's reserved for projects, and what's
                      available. Scan barcodes to update inventory instantly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
                  <div className="w-8 h-8 bg-white border border-zinc-200 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Dynamic warehouse organization</h3>
                    <p className="text-sm text-zinc-500">
                      The system suggests where to place materials based on upcoming needs.
                      Items for imminent works surface to accessible locations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
                  <div className="w-8 h-8 bg-white border border-zinc-200 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Priority-based picking</h3>
                    <p className="text-sm text-zinc-500">
                      When workers prepare materials for site delivery, they see items
                      ordered by project urgency. Critical projects appear first.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
                  <div className="w-8 h-8 bg-white border border-zinc-200 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Offline-capable</h3>
                    <p className="text-sm text-zinc-500">
                      Works without connectivity. Changes sync when connection returns.
                      No lost updates when you're in a basement or on a remote site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual suggestion */}
              <div className="mt-8 p-6 bg-white border border-zinc-200 rounded-lg">
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-3">Visual Concept</p>
                <p className="text-sm text-zinc-500">
                  Phone screen mockup showing the PDA interface: large touch targets, high contrast,
                  clear status indicators. Worker in warehouse environment scanning a barcode.
                  Photo with bright sunlight showing screen readability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                AI Integration
              </h2>
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
              <p className="text-lg">
                AI runs across all Foreman modules. Not as a replacement for human judgment,
                but as a layer of assistance that makes information clearer and decisions faster.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Understanding assistance</h3>
                  <p className="text-sm text-zinc-500">
                    Summarize long email threads. Explain what changed between document versions.
                    Translate technical specifications into plain language.
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Priority highlighting</h3>
                  <p className="text-sm text-zinc-500">
                    Surface what needs attention now. Flag conflicts before they become problems.
                    Identify works at risk of delay based on dependencies.
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Scenario simulation</h3>
                  <p className="text-sm text-zinc-500">
                    Model "what if" questions. What happens if this delivery is delayed?
                    How does moving this crew affect other projects?
                  </p>
                </div>
                <div className="p-4 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Decision support</h3>
                  <p className="text-sm text-zinc-500">
                    Show tradeoffs clearly. When you have three options, show the implications
                    of each. Let humans decide with better information.
                  </p>
                </div>
              </div>
              <p>
                The goal is clarity, not automation. Foreman's AI helps teams understand their
                situation and make better decisions. It doesn't make decisions for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Current Status
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-8">
                <div className="border-l-2 border-green-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-2">Now</h3>
                  <p className="text-zinc-600">
                    Foreman Core and PDA in pilot with 15 construction teams. Core job management,
                    material tracking, and warehouse operations. Gathering feedback on workflows
                    and priorities.
                  </p>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-2">Next</h3>
                  <p className="text-zinc-600">
                    Email integration and CNC optimization modules. Expanded supplier management.
                    Mobile improvements based on pilot feedback.
                  </p>
                </div>
                <div className="border-l-2 border-zinc-200 pl-4">
                  <h3 className="font-medium text-zinc-900 mb-2">Later</h3>
                  <p className="text-zinc-600">
                    Full AI integration across modules. Subcontractor portal. Integration with
                    accounting systems. Multi-company collaboration features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Pricing
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Foreman is priced per active user with modules that can be adopted incrementally.
                Start with Core, add modules as your needs grow.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Starter</h3>
                  <p className="text-sm text-zinc-500 mb-4">
                    Solo contractors and small teams up to 5 users
                  </p>
                  <p className="text-sm text-zinc-400">Core module included</p>
                </div>
                <div className="p-6 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Team</h3>
                  <p className="text-sm text-zinc-500 mb-4">
                    Growing companies with 6-25 users
                  </p>
                  <p className="text-sm text-zinc-400">All modules available</p>
                </div>
                <div className="p-6 bg-white border border-zinc-200 rounded-lg">
                  <h3 className="font-medium mb-2">Enterprise</h3>
                  <p className="text-sm text-zinc-500 mb-4">
                    Large operations with custom needs
                  </p>
                  <p className="text-sm text-zinc-400">Custom integration and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium mb-2">See Foreman in action</h2>
              <p className="text-zinc-600">
                Schedule a walkthrough with a construction team that's already using it.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:foreman@albedo.industries?subject=Foreman Demo Request"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors whitespace-nowrap"
              >
                Request demo
              </a>
              <a
                href="mailto:foreman@albedo.industries?subject=Foreman Pilot Program"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-colors whitespace-nowrap"
              >
                Join pilot program
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
