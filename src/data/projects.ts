export interface Project {
  slug: string
  name: string
  tagline: string
  positioning: string
  category: 'Consumer' | 'B2B'
  status: 'Live' | 'Building' | 'Concept'
  capabilities: string[]
  problem: string
  solution: string
  differentiator: string
  targetUsers: string
  useCases: string[]
  businessModel: string
  distribution: string
  roadmap: {
    now: string
    next: string
    later: string
  }
  trustAndSafety: string
  vision: string
  website?: string
  app?: string
  // Optional extended fields for specific projects
  keyFeatures?: string[]
  disclaimer?: string
  ethicsNote?: string
  chargingWall?: {
    headline: string
    description: string
    note: string
  }
  // Path to project logo relative to public/, e.g. "media/germet/germet-logo.png"
  logo?: string
  // Indicates this project has a dedicated page with richer content
  dedicatedPage?: string
  // For sub-products: links to parent product slug
  parentSlug?: string
  // Module breakdown for complex products (parent products only)
  modules?: {
    name: string
    shortName: string
    description: string
  }[]
}

export const projects: Project[] = [
  {
    slug: 'alb-parking',
    name: 'ALB Parking',
    logo: 'media/alb-parking/alb-parking-logo.png',
    tagline: 'Turn unused parking into city infrastructure.',
    positioning: 'A marketplace that converts private parking spots into bookable, reliable urban capacity.',
    category: 'Consumer',
    status: 'Live',
    capabilities: [
      'Map-based spot discovery',
      'QR code access control',
      'Camera-verified entry/exit',
    ],
    keyFeatures: [
      'Find guaranteed availability near your destination on an interactive map',
      'Reserve in advance — no more circling blocks',
      'Enter and exit using QR code in the app',
      'Access verified via camera or gate camera at entry',
      'Clear guidance to the exact spot for new users',
      'Security cameras add deterrence and traceability for vehicle integrity',
    ],
    problem: 'Cities don\'t only have a parking problem. They have a circulation problem. A significant percentage of urban traffic is drivers looping around blocks, increasing congestion, wasting fuel and energy, creating noise and emissions, and arriving stressed and late. At the same time, cities contain a hidden asset: private parking spots that sit empty for long stretches — especially during working hours.',
    solution: 'ALB Parking is a marketplace that turns unused private parking capacity into shared infrastructure. People who have a parking spot but don\'t use it while they\'re at work list it on ALB. Drivers who need predictable parking near work or key urban areas find and book spots in advance. Instead of "I\'ll drive there and hope," the flow becomes: open app, see guaranteed availability, reserve, arrive and enter smoothly, park and leave with confidence. ALB removes the worst part of urban parking: uncertainty.',
    differentiator: 'We don\'t add more cars to cities. We reduce the time cars spend moving with no destination. Our QR-based access and camera verification create accountability, not just convenience. Booking generates a timed authorization, entry and exit are logged with time, booking, and user identity. Disputes become solvable. We design for traceability and controlled access.',
    targetUsers: 'Drivers who need predictable parking near work or key urban destinations. Property owners with underutilized parking — residential, commercial, or mixed-use buildings with daytime vacancies.',
    useCases: [
      'Daily commuters who want guaranteed parking near their workplace',
      'Property owners monetizing unused daytime parking capacity',
      'Visitors to dense urban areas who want to reserve in advance',
      'EV drivers who need parking with integrated charging access',
    ],
    businessModel: 'Commission on each booking transaction, shared between ALB and spot owners. Premium features for spot owners include analytics and dynamic pricing. Enterprise partnerships for building operators with multiple locations.',
    distribution: 'Supply-side partnerships with property managers and building operators. Demand-side growth through commuter communities and navigation app integrations. City-level expansion with local operator relationships.',
    roadmap: {
      now: 'Core booking and access control live in initial markets. Expanding building partnerships. Onboarding spot owners.',
      next: 'Charging Wall integration at select locations. Navigation app deep links. Monthly parking subscriptions.',
      later: 'Predictive demand optimization. Multi-city expansion. Fleet management features.',
    },
    trustAndSafety: 'Access is controlled and auditable. Every entry and exit is logged with timestamp, booking reference, and user identity. Camera coverage provides deterrence and verification for disputes. Payment data encrypted and PCI DSS compliant. We don\'t claim zero incidents — we design for traceability and accountability.',
    vision: 'Make parking predictable. Reduce cars circulating without destination. Improve city mobility by using existing infrastructure more efficiently. And by pairing parking with EV charging, make electric vehicle ownership practical for people without dedicated home charging.',
    chargingWall: {
      headline: 'Charging Wall — designed for real-world urban use',
      description: 'We are patenting a new EV charging wall designed specifically for ALB parking locations. Built for high turnover and practical urban use, it ties charging to reserved parking access — so EV charging becomes a natural part of the parking flow, not a separate problem.',
      note: 'Designed to reduce charging time compared to typical urban charging setups. Optimized for speed, safety, and scalability.',
    },
    website: '#',
    app: '#',
  },
  {
    slug: 'foreman',
    name: 'Foreman',
    tagline: 'A construction operating system, not a traditional ERP.',
    positioning: 'Built for how construction actually works: projects evolve daily, priorities shift, materials move, and teams need clarity in real time.',
    category: 'B2B',
    status: 'Building',
    capabilities: [
      'Real-time project visibility',
      'Email-to-project linking',
      'CNC cutting optimization',
      'Mobile warehouse & site',
    ],
    dedicatedPage: '/foreman',
    modules: [
      {
        name: 'Foreman Core',
        shortName: 'Core',
        description: 'Projects, suppliers, budgets, works in progress. All visible in one place.',
      },
      {
        name: 'Foreman Email',
        shortName: 'Email',
        description: 'Connects email communication to projects. Extracts relevant information. Prevents loss of context.',
      },
      {
        name: 'Foreman CNC',
        shortName: 'CNC',
        description: 'Optimizes cutting of plates, wood, aluminum, steel. Reduces waste. Connects production to project priorities.',
      },
      {
        name: 'Foreman PDA',
        shortName: 'PDA',
        description: 'Mobile interface for warehouse and site workers. Real-time stock visibility. Priority-based picking.',
      },
    ],
    problem: 'Traditional ERPs were designed for manufacturing and retail, environments where processes repeat predictably. Construction operates differently. Every project is unique. Sites change daily. Materials arrive when they arrive. ERPs assume you can define processes upfront and execute them. Construction requires systems that adapt continuously. When project managers spend more time updating software than managing projects, something is wrong with the software.',
    solution: 'Foreman models construction projects as living systems, not static plans. Every project has works in progress, each with its own status, materials, and dependencies. When something changes (a delivery is delayed, a crew is reassigned, a client requests a modification) the system shows you what that change affects. Four modules can be adopted together or separately: Core ERP, Email integration, CNC optimization, and mobile PDA for warehouse and site.',
    differentiator: 'We do not just track what happened. We help you see what is coming. AI integration across modules assists understanding, highlights priorities, simulates future scenarios, and helps teams make better decisions faster. The goal is clarity, not automation. Foreman helps teams understand their situation. It does not make decisions for them.',
    targetUsers: 'Construction companies that have outgrown spreadsheets but find traditional ERPs too rigid. Teams that need real-time visibility across projects, materials, and production. Companies where the gap between office planning and field execution causes problems.',
    useCases: [
      'General contractors managing multiple active projects with shared resources',
      'Fabrication shops coordinating cutting schedules with project priorities',
      'Warehouses organizing materials for multiple concurrent construction sites',
      'Project managers needing real-time visibility without chasing updates',
    ],
    businessModel: 'Per-seat SaaS subscription with modular pricing. Start with Core, add modules as needs grow. Starter tier for small teams (up to 5 users). Team tier for growing companies (6-25 users). Enterprise tier with custom integration and support.',
    distribution: 'Direct outreach to construction companies through industry networks. Partnerships with material suppliers and equipment rental companies. Trade show presence. Referral program with existing pilot customers.',
    roadmap: {
      now: 'Foreman Core and PDA in pilot with 15 construction teams. Core job management, material tracking, and warehouse operations.',
      next: 'Email integration and CNC optimization modules. Expanded supplier management. Mobile improvements based on pilot feedback.',
      later: 'Full AI integration across modules. Subcontractor portal. Integration with accounting systems. Multi-company collaboration features.',
    },
    trustAndSafety: 'All project data encrypted at rest and in transit. Role-based access controls separate field workers from management views. Photo metadata preserved for compliance documentation. Regular backups with 30-day retention. GDPR-ready data export. Audit trail for all changes.',
    vision: 'Become the operational backbone for construction companies. The system that connects planning, production, materials, and field execution. Not by adding complexity, but by making existing workflows visible, connected, and responsive to change.',
  },
  {
    slug: 'foreman-core',
    name: 'Foreman Core',
    tagline: 'The ERP layer for construction.',
    positioning: 'Projects, suppliers, budgets, and works in progress. All visible in one place.',
    category: 'B2B',
    status: 'Building',
    parentSlug: 'foreman',
    dedicatedPage: '/foreman',
    capabilities: [
      'Project management',
      'Supplier tracking',
      'Budget visibility',
      'Works in progress',
    ],
    problem: 'Construction companies track projects across spreadsheets, whiteboards, and disconnected tools. Information lives in silos. Project managers spend hours gathering status updates instead of making decisions.',
    solution: 'Foreman Core provides a single operational view of all projects, suppliers, budgets, and works in progress. Real-time dashboards show what is happening now, not what the plan said would happen.',
    differentiator: 'Designed for construction workflows, not adapted from manufacturing or retail. Updates flow from field to office automatically. No duplicate data entry.',
    targetUsers: 'Construction project managers and operations teams who need real-time visibility without manual status chasing.',
    useCases: [
      'Tracking multiple active projects with shared resources',
      'Monitoring budget consumption across project phases',
      'Coordinating supplier relationships and delivery schedules',
      'Daily standups with accurate, current information',
    ],
    businessModel: 'Per-seat subscription. Core is the foundation module. Can be used standalone or combined with other Foreman modules.',
    distribution: 'Direct sales to construction companies. Often the entry point before adopting additional modules.',
    roadmap: {
      now: 'In pilot with 15 construction teams. Core project and budget tracking operational.',
      next: 'Enhanced reporting, supplier performance metrics.',
      later: 'Integration with accounting systems, multi-company views.',
    },
    trustAndSafety: 'All project data encrypted. Role-based access controls. Audit trail for all changes.',
    vision: 'The operational foundation that makes every other construction tool more useful.',
  },
  {
    slug: 'foreman-email',
    name: 'Foreman Email',
    tagline: 'Connect email to construction projects.',
    positioning: 'Links email threads to specific projects and works. Extracts relevant information. Prevents loss of context.',
    category: 'B2B',
    status: 'Building',
    parentSlug: 'foreman',
    dedicatedPage: '/foreman',
    capabilities: [
      'Email-to-project linking',
      'Information extraction',
      'Context preservation',
      'Thread history',
    ],
    problem: 'Construction runs on email. Supplier quotes, client change requests, crew updates. None of this connects to your project management system. Context gets lost. Decisions get forgotten.',
    solution: 'Foreman Email bridges the gap between unstructured communication and structured execution. It links email threads to specific projects and works, extracts relevant information, and ensures context is preserved.',
    differentiator: 'Not a separate inbox. Works with your existing email. Automatically associates threads with projects based on content, contacts, and patterns.',
    targetUsers: 'Project managers who spend hours searching email for context. Teams where communication happens outside the project system.',
    useCases: [
      'Linking supplier quotes to specific project phases',
      'Capturing client change requests with full thread history',
      'Finding all communication related to a specific work item',
      'Onboarding new team members with full project context',
    ],
    businessModel: 'Add-on module to Foreman Core. Per-seat pricing.',
    distribution: 'Offered to existing Foreman customers. Can also be adopted as a standalone email organization tool.',
    roadmap: {
      now: 'Development in progress. Email linking architecture complete.',
      next: 'Integration with major email providers. Automatic thread classification.',
      later: 'AI-assisted information extraction, action item detection.',
    },
    trustAndSafety: 'Email data processed securely. Never stored on third-party servers. User controls which threads are linked.',
    vision: 'Make every email conversation findable and actionable within project context.',
  },
  {
    slug: 'foreman-cnc',
    name: 'Foreman CNC',
    tagline: 'Cutting optimization for construction.',
    positioning: 'Optimizes cutting of plates, wood, aluminum, steel. Reduces waste. Connects production to project priorities.',
    category: 'B2B',
    status: 'Building',
    parentSlug: 'foreman',
    dedicatedPage: '/foreman',
    capabilities: [
      'Layout optimization',
      'Waste reduction',
      'Multi-project batching',
      'Priority scheduling',
    ],
    problem: 'Material waste is margin loss. When cutting plates, wood, aluminum, or steel, how you arrange cuts determines how much ends up in the scrap bin. Most shops optimize cutting separately from project management. When priorities change, the floor does not know.',
    solution: 'Foreman CNC optimizes cutting layouts to reduce waste and connects production planning directly to project priorities. When a project becomes urgent, the production floor knows immediately.',
    differentiator: 'Combines cutting optimization algorithms with real-time project priority data. Multi-project batching finds efficiency across jobs.',
    targetUsers: 'Fabrication shops, metal workers, woodworking operations. Any construction-adjacent business that cuts materials.',
    useCases: [
      'Optimizing plate cutting layouts to minimize waste',
      'Batching cuts from multiple projects onto the same material',
      'Adjusting production schedules when project priorities change',
      'Tracking material utilization and waste metrics',
    ],
    businessModel: 'Module pricing based on production volume. Can be used standalone or integrated with Foreman Core.',
    distribution: 'Direct sales to fabrication shops. Partnerships with CNC machine vendors.',
    roadmap: {
      now: 'Core optimization algorithms developed. Pilot integrations in progress.',
      next: 'Support for complex shapes and grain direction constraints.',
      later: 'Machine-specific export formats, automated job scheduling.',
    },
    trustAndSafety: 'Production data kept confidential. Integration with existing CNC systems is read-only unless explicitly authorized.',
    vision: 'Close the gap between project management and production floor execution.',
  },
  {
    slug: 'foreman-pda',
    name: 'Foreman PDA',
    tagline: 'Mobile interface for warehouse and site.',
    positioning: 'Real-time stock visibility. Dynamic warehouse organization. Priority-based picking. Works offline.',
    category: 'B2B',
    status: 'Building',
    parentSlug: 'foreman',
    dedicatedPage: '/foreman',
    capabilities: [
      'Mobile inventory',
      'Barcode scanning',
      'Offline operation',
      'Priority picking',
    ],
    problem: 'Office dashboards do not help workers in the warehouse or on site. They need a mobile interface that works in real conditions: gloved hands, bright sunlight, intermittent connectivity.',
    solution: 'Foreman PDA is the mobile interface for workers who handle materials. See stock in real time, scan barcodes to update inventory, pick materials based on project priority. Works offline and syncs when connected.',
    differentiator: 'Built for construction environments, not adapted from retail warehouse systems. Large touch targets, high contrast, offline-first architecture.',
    targetUsers: 'Warehouse workers, site supervisors, material handlers. Anyone who needs inventory visibility outside the office.',
    useCases: [
      'Checking stock availability before loading a truck',
      'Scanning materials to update warehouse location',
      'Preparing shipments based on project priority',
      'Receiving deliveries and updating inventory on arrival',
    ],
    businessModel: 'Per-device subscription. Often bundled with Foreman Core for operations teams.',
    distribution: 'Offered alongside Foreman Core deployments. Can be adopted separately for warehouse-only use.',
    roadmap: {
      now: 'In pilot with warehouse operations. Core scanning and inventory features operational.',
      next: 'Improved offline sync, voice input for hands-free operation.',
      later: 'Integration with third-party warehouse management systems.',
    },
    trustAndSafety: 'Device data synced securely. Lost device can be remotely disconnected. No sensitive data stored locally.',
    vision: 'Put accurate inventory information in the hands of the people who handle materials.',
  },
  {
    slug: 'ardyn-fitness',
    name: 'Ardyn Fitness',
    logo: 'media/ardyn/ardyn-logo.png',
    tagline: 'A daily decision engine for fitness and nutrition.',
    positioning: 'Adaptive training that fits your day — not the other way around. Primary focus: Asia.',
    category: 'Consumer',
    status: 'Building',
    capabilities: [
      'Daily adaptive workouts',
      'Equipment guidance',
      'Practical nutrition',
    ],
    keyFeatures: [
      'Personalized daily training whether you go to the gym or not',
      'AI guidance that explains exactly how to use gym equipment safely and correctly',
      'Plans adapt daily to time available, equipment, energy, and goals',
      'Nutrition guidance that is practical and local-habit friendly',
      'Answers "What should I do today?" based on real constraints',
    ],
    problem: 'Most fitness apps fail because they assume people live perfect lives: perfect schedule, perfect motivation, perfect gym access, perfect knowledge of equipment. Real people don\'t. In Asia — and globally — a huge friction point is that people feel lost in gyms, don\'t know how to use machines safely, copy random workouts, get injured, or quit.',
    solution: 'Ardyn is not "an AI trainer." Ardyn is a daily decision engine. It answers: What should I do today? With what time and equipment? With what energy and constraints? What should I eat today that fits my goal? Every day Ardyn adapts based on location (gym, home, outdoors), time available (15, 30, 45 minutes), objective (fat loss, muscle, strength, posture, energy), experience level, and equipment availability.',
    differentiator: 'Equipment understanding is the wedge. Ardyn explains exactly how to use equipment — "do this, like this, for this reason." It reduces gym intimidation, increases retention, and makes fitness doable for people who don\'t have personal trainers. No hype, no gamification. A calm, local-first system that makes health practical every day.',
    targetUsers: 'Adults in urban Asia who want to build sustainable fitness habits. People who feel intimidated by gyms or overwhelmed by generic workout plans. Anyone looking for guidance that adapts to their actual schedule and constraints.',
    useCases: [
      'Urban professionals with unpredictable schedules and gym access',
      'Gym newcomers who need equipment guidance without hiring a trainer',
      'Travelers who want effective workouts with whatever equipment is available',
      'People returning to fitness who need realistic, progressive programming',
    ],
    businessModel: 'Subscription-based with meaningful free tier (basic daily guidance). Premium tier for deeper personalization, nutrition planning, and workout history. No ads, no data selling.',
    distribution: 'Asia-first launch targeting urban fitness communities. Partnerships with gym chains for equipment library integration. Content marketing focused on practical fitness advice. App store optimization in key Asian markets.',
    roadmap: {
      now: 'Closed beta with adaptive programming engine. Equipment library for common gym machines. Basic daily workout generation.',
      next: 'Nutrition guidance with local food preferences. Expanded equipment database. iOS and Android launch in first markets.',
      later: 'Multi-language support across Asian markets. Gym chain partnerships. Wearable integrations for recovery tracking.',
    },
    trustAndSafety: 'Health data handled with extra care. No sharing with third parties. Users own their data with full export capability. Clear guidance that app provides suggestions, not medical advice. Integration with HealthKit/Google Fit is opt-in only.',
    vision: 'A calm, local-first system that makes health doable every day. Ardyn adapts fitness to the user\'s day — not the other way around. We\'re building for the long-term practice of health, not 12-week transformations.',
  },
  {
    slug: 'aperta',
    name: 'Aperta',
    tagline: 'A modern restaurant operating layer.',
    positioning: 'QR menu, live queue visibility, reservations, events, and supplier network—unified for independent restaurants.',
    category: 'B2B',
    status: 'Building',
    capabilities: [
      'QR-based menu & ordering',
      'Live queue visibility',
      'Reservations & events',
    ],
    keyFeatures: [
      'QR code entry points (tables and door)',
      'Live queue with "how many ahead of you" visibility',
      'Reservations + option to reserve entire venue for events/parties',
      'Online menu templates personalized per restaurant',
      'Supplier directory / marketplace-style supplier list',
    ],
    problem: 'Independent restaurants juggle fragmented tools for menus, queue management, reservations, and supplier relationships. Each system operates in isolation, creating operational friction and poor visibility into day-to-day operations. Staff waste time switching between tools, and customers experience inconsistent service.',
    solution: 'Aperta unifies these essential operations into a single mobile-first system. Guests scan QR codes at tables or the door to view menus, join virtual queues, and make reservations. Restaurant operators get a single dashboard for queue status, upcoming bookings, and supplier coordination. Templates allow quick setup without starting from scratch.',
    differentiator: 'We combine simplicity with operational depth. Unlike point solutions that handle one thing well, Aperta connects the dots between customer-facing touchpoints and back-office needs. The QR entry points create a natural adoption path, and the supplier network adds value that menu-only apps cannot provide.',
    targetUsers: 'Independent restaurants and small chains (1-10 locations) looking to modernize operations without enterprise complexity. Particularly suited for casual dining, cafes, and venues that host private events.',
    useCases: [
      'Casual dining restaurants managing walk-in queues during peak hours',
      'Cafes offering QR ordering to reduce counter congestion',
      'Venues hosting private events with custom menus',
      'Restaurant groups standardizing operations across locations',
    ],
    businessModel: 'SaaS subscription with tiered pricing based on features and locations. Base tier covers menu and queue. Growth tier adds reservations and events. Add-ons include premium templates and supplier marketplace access.',
    distribution: 'Local partnerships with restaurant associations and food service distributors. Pilot programs in select neighborhoods. Content marketing focused on restaurant operations. Referral incentives for existing customers.',
    roadmap: {
      now: 'Core menu display, queue management, and basic reservations in pilot with 8 restaurants.',
      next: 'Event booking, venue rentals, and supplier directory MVP.',
      later: 'Multi-location management, inventory integration, and supplier ordering automation.',
    },
    trustAndSafety: 'Guest data is minimal—no accounts required for basic use. Restaurant data is encrypted and isolated per tenant. GDPR-compliant data handling with clear retention policies. Supplier relationships are opt-in.',
    vision: 'Build the operational backbone for independent restaurants. As we add supplier features, Aperta becomes a platform that strengthens the local restaurant ecosystem rather than extracting value from it.',
  },
  {
    slug: 'beatflow',
    name: 'BeatFlow',
    tagline: 'Music that evolves as you listen.',
    positioning: 'A generative music app where the soundtrack continuously transforms—every 30 seconds, the AI learns from what just played and composes what comes next.',
    category: 'Consumer',
    status: 'Concept',
    capabilities: [
      'Rolling 30-second generation',
      'Continuous evolution',
      'Minimal interface',
    ],
    problem: 'Music discovery is either passive (playlists of existing tracks) or requires creative expertise (DAWs and production tools). Listeners who want new sounds are stuck choosing from what already exists. Creators who want to explore ideas face steep learning curves. There is no middle ground for active, effortless musical exploration.',
    solution: 'BeatFlow generates music in rolling 30-second windows. The AI analyzes the previous 30 seconds—rhythm, harmony, texture—and composes the next 30 seconds. The result is a continuous, evolving soundtrack that never loops and never stops surprising. Users listen, the music responds, and the experience unfolds.',
    differentiator: 'The rolling generation mechanism creates genuine musical evolution, not static loops or simple variations. Each 30-second window responds to what came before, building coherent yet unpredictable journeys. The interface is deliberately minimal—the focus is on the sound, not controls.',
    targetUsers: 'Listeners who want something genuinely new. Creators looking for inspiration without opening a DAW. People who use music for focus, meditation, or background ambiance and want variety without managing playlists.',
    useCases: [
      'Focus sessions with continuously evolving background music',
      'Creative inspiration for musicians and artists',
      'Meditation and relaxation with adaptive soundscapes',
      'Background music that never gets repetitive',
    ],
    businessModel: 'Freemium model. Free tier offers basic generation and listening. Premium subscription unlocks higher audio quality, session export, stem separation, and the ability to share unique sessions.',
    distribution: 'Creator communities and music forums. Viral potential through shareable sessions—each listening experience is unique. Partnerships with productivity and meditation apps.',
    roadmap: {
      now: 'Core concept validation. Research on generative music approaches. User interviews with target audiences.',
      next: 'MVP with single-genre generation. Basic iOS app. Limited beta testing.',
      later: 'Multi-genre support. Cross-platform. Creator tools for influencing generation parameters.',
    },
    trustAndSafety: 'Generated music is original—no copyrighted material is reproduced. The system is trained on licensed or original compositions only. User listening patterns are not sold or shared. Clear communication that output quality varies.',
    ethicsNote: 'We are focused on generating original compositions, not imitating specific artists or reproducing copyrighted works. Our approach prioritizes musical exploration over imitation. We acknowledge that generative music is an evolving field and commit to transparent communication about our methods.',
    vision: 'Explore what happens when music creation becomes a continuous, collaborative process between human attention and machine generation. BeatFlow is not about replacing human creativity—it is about discovering new musical territories together.',
  },
  {
    slug: 'alphaclaim',
    name: 'Alphaclaim',
    tagline: 'Daily market intelligence, clearly structured.',
    positioning: 'What moved, why it mattered, and what to watch—premarket, session, and after-hours briefs for people who need clarity without noise.',
    category: 'Consumer',
    status: 'Building',
    capabilities: [
      'Premarket summaries',
      'Session recaps',
      'After-hours briefings',
    ],
    disclaimer: 'Information only. Not investment advice.',
    problem: 'Market information is scattered across multiple sources, each with different formats and update schedules. Retail investors and busy operators spend excessive time assembling context from news sites, data feeds, and social media. By the time they have a picture, markets have moved.',
    solution: 'Alphaclaim delivers structured daily briefs timed to market phases: premarket preparation, session recap, and after-hours summary. Each brief answers the same questions: what moved significantly, what drove those moves, and what deserves attention next. Watchlists and alerts add personalization without complexity.',
    differentiator: 'Timing-aware structure sets Alphaclaim apart. Rather than a firehose of updates, you get the right information at the right time. Summaries are written for clarity, not engagement. No clickbait, no hot takes—just context you can act on.',
    targetUsers: 'Retail investors who check markets daily but do not have time for deep research. Operators and founders who need market awareness for business decisions. Anyone who wants structured information instead of scattered noise.',
    useCases: [
      'Morning prep before market open',
      'Quick midday check on portfolio movers',
      'Evening review of session highlights',
      'Weekend research and watchlist management',
    ],
    businessModel: 'Subscription tiers. Free tier receives daily email summaries. Paid tier adds real-time alerts, expanded watchlists, and historical brief archives. No ads, no sponsored content.',
    distribution: 'Newsletter-style loop: valuable free content builds audience, premium features convert engaged readers. Community building in investor forums. API integrations with trading platforms as a later phase.',
    roadmap: {
      now: 'Core brief generation and delivery system. Web dashboard for watchlists. Email delivery in pilot.',
      next: 'Mobile app with push notifications. Expanded market coverage. Alert customization.',
      later: 'API access for developers. Portfolio integration. International market coverage.',
    },
    trustAndSafety: 'Alphaclaim provides information, not investment advice. We are not a registered investment advisor. Users make their own decisions. Data sources are clearly attributed. Personal portfolio data is encrypted and never shared.',
    vision: 'Become the trusted daily companion for anyone who wants to stay informed about markets without drowning in noise. Quality over quantity, clarity over hype.',
  },
  {
    slug: 'germet',
    name: 'Germet',
    logo: 'media/germet/germet-logo.png',
    tagline: 'The control layer for global apparel sourcing.',
    positioning: 'A modular purchasing platform that makes garment sourcing legible, comparable, and auditable.',
    category: 'B2B',
    status: 'Building',
    capabilities: [
      'Component-level visibility',
      'Supplier comparison',
      'Contract standardization',
    ],
    keyFeatures: [
      'Garment decomposition: see every component (fabric, lining, zipper, buttons, thread, labels, packaging)',
      'Supplier options per component with minimum order quantities and lead times',
      'Risk exposure analysis: where are you vulnerable?',
      'Cost drivers: what is actually driving the price?',
      'Contract templates and purchase flow standardization',
      'Audit trail for every sourcing decision',
    ],
    problem: 'Fashion sourcing is not "buy fabric." It is coordinating a multi-component product across multiple countries, lead times, quality constraints, and contracts. A jacket is a system: outer fabric, lining, zipper, buttons, thread, labels, packaging, assembly, shipping, compliance documents. Each component has different suppliers, different minimum order quantities, different risks, different delivery windows, different contracts. Buyers struggle to answer basic questions fast: Where are we exposed? What is driving cost? What can be swapped without breaking quality?',
    solution: 'Germet makes the garment legible. It turns sourcing into a structured model: Garment → Components → Supplier Options → Decisions → Contracts → Orders → Delivery. A buyer can finally answer, fast: Where are we exposed (risk)? What is driving cost (components)? What can be swapped without breaking quality? What is the fastest path to production? Who is accountable for each component?',
    differentiator: 'Germet is a platform, not a tool. It standardizes supplier comparison, contract templates, purchase flow steps, component libraries, and audit trails for decisions. Instead of scattered spreadsheets and email chains, buyers have a single structured view of every sourcing decision and its implications.',
    targetUsers: 'Apparel brands and retailers with global supply chains. Procurement teams managing multi-component products. Fashion companies scaling production who need structured sourcing workflows.',
    useCases: [
      'Procurement managers comparing suppliers across components and regions',
      'Sourcing teams tracking lead times and delivery windows across product lines',
      'Quality teams auditing component decisions and supplier performance',
      'Finance teams understanding cost drivers and margin exposure',
    ],
    businessModel: 'SaaS subscription based on purchasing volume and number of users. Base tier for small brands. Enterprise tier with advanced analytics, custom integrations, and dedicated support. Implementation services for complex supply chain migrations.',
    distribution: 'Direct sales to mid-size apparel brands. Partnerships with sourcing consultants and trade organizations. Industry event presence. Content marketing focused on supply chain transparency.',
    roadmap: {
      now: 'Core component modeling and supplier comparison. Contract template library. Initial pilot with apparel brands.',
      next: 'Order tracking and delivery management. Integration with common ERP systems. Expanded supplier database.',
      later: 'Predictive lead time analysis. Sustainability and compliance tracking. Multi-brand supplier network effects.',
    },
    trustAndSafety: 'Supplier data and pricing information are confidential to each customer. Role-based access controls for sensitive procurement data. Audit logs preserved for compliance requirements. GDPR-compliant data handling with clear retention policies.',
    vision: 'The control layer for global sourcing decisions. Germet becomes the structured backbone that makes apparel supply chains visible, comparable, and accountable — transforming procurement from reactive firefighting to proactive decision-making.',
  },
]
