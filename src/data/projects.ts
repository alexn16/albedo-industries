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
}

export const projects: Project[] = [
  {
    slug: 'alb-parking',
    name: 'ALB Parking',
    tagline: 'Simple, stress-free parking for everyday drivers.',
    positioning: 'The minimalist parking app that respects your time.',
    category: 'Consumer',
    status: 'Live',
    capabilities: [
      'Real-time spot availability',
      'One-tap payment',
      'Expiration reminders',
    ],
    problem: 'Finding parking in busy areas is frustrating and time-consuming. Most parking apps are cluttered with features nobody asked for, and the experience of actually paying for parking remains unnecessarily complicated. Users juggle multiple apps for different parking operators, deal with confusing interfaces, and often overpay because they lose track of time.',
    solution: 'ALB Parking shows you available spots nearby, lets you pay in seconds, and reminds you before your time expires. No account required for basic use. No ads. No upsells. The interface is stripped to essentials: find a spot, pay, get a reminder. We handle the complexity of integrating with multiple operators so you don\'t have to.',
    differentiator: 'We focused on doing one thing well instead of trying to be a super-app. The interface is minimal by design. We partnered directly with parking operators to ensure real-time availability data, not estimates. Our payment flow completes in under 10 seconds, compared to industry average of 45+ seconds.',
    targetUsers: 'Daily commuters, city residents, and anyone who regularly parks in metered or managed lots. Particularly useful for people who value their time and prefer tools that stay out of the way.',
    useCases: [
      'Daily work commuters parking in city centers',
      'Weekend shoppers in managed lots',
      'Event attendees finding nearby parking',
      'Business travelers in unfamiliar cities',
    ],
    businessModel: 'Transaction fee on each parking session (small percentage added to operator rate). No subscription required. Premium features (reserved spots, monthly passes) available in select markets with revenue share to operators.',
    distribution: 'Organic growth through word-of-mouth and app store optimization. Partnerships with parking operators who recommend the app to their users. Local marketing in expansion cities. No paid user acquisition at unsustainable rates.',
    roadmap: {
      now: 'Core payment and availability features live in 12 markets. Expanding operator partnerships.',
      next: 'Navigation app integrations (Apple Maps, Google Maps). Monthly parking passes.',
      later: 'Predictive availability. EV charging integration. Enterprise fleet features.',
    },
    trustAndSafety: 'Payment data encrypted in transit and at rest. PCI DSS compliant payment processing through Stripe. No location tracking when app is not in use. Data retention limited to transaction history necessary for receipts and refunds.',
    vision: 'Expand coverage to more cities while maintaining the same simple experience. Explore integrations with navigation apps so parking becomes a seamless part of any trip, not an afterthought.',
    website: '#',
    app: '#',
  },
  {
    slug: 'foreman',
    name: 'Foreman',
    tagline: 'Job management for construction teams that actually gets used.',
    positioning: 'Field-first construction software built by watching real crews work.',
    category: 'B2B',
    status: 'Building',
    capabilities: [
      'Offline-first job logging',
      'Automatic photo documentation',
      'Crew scheduling sync',
    ],
    problem: 'Construction project management software is either too complex for small teams or too basic to be useful. Field workers avoid using tools that slow them down, which leads to communication gaps and costly mistakes. The industry loses billions annually to miscommunication, rework, and documentation failures that better tools could prevent.',
    solution: 'Foreman is built for how construction teams actually work. Quick job logging from the field, automatic photo documentation with GPS and timestamp, and simple scheduling that syncs across the whole crew. Works offline in basements and rural sites, syncs when connected. Designed for gloved hands and bright sunlight.',
    differentiator: 'We spent months on job sites before writing a line of code. Every feature exists because we watched someone struggle without it. The app is designed for gloved hands and bright sunlight, not conference room demos. Our offline-first architecture means the app works even in basements, tunnels, and rural sites with poor connectivity.',
    targetUsers: 'Small to mid-size construction companies, general contractors, and specialty trade teams. Particularly suited for teams of 5-50 who need structure without bureaucracy.',
    useCases: [
      'General contractors managing multiple active sites',
      'Specialty trades (electrical, plumbing, HVAC) coordinating crews',
      'Renovation companies tracking progress for homeowner updates',
      'Commercial fit-out teams documenting compliance requirements',
    ],
    businessModel: 'Per-seat SaaS subscription with tiered pricing. Free tier for solo contractors (up to 3 projects). Team tier for small crews. Business tier with advanced features, integrations, and priority support.',
    distribution: 'Direct outreach to construction companies through industry networks. Partnerships with material suppliers and equipment rental companies. Trade show presence. Referral program with existing customers.',
    roadmap: {
      now: 'Core job logging, photo documentation, and scheduling in pilot with 15 construction teams.',
      next: 'Material tracking and simple invoicing. QuickBooks integration.',
      later: 'Subcontractor portal. Permit and inspection tracking. Equipment maintenance scheduling.',
    },
    trustAndSafety: 'All project data encrypted. Granular access controls for crew members vs. management. Photo metadata preserved for compliance documentation. Regular backups with 30-day retention. GDPR-ready data export.',
    vision: 'Build out material tracking and simple invoicing to reduce the number of tools teams need to juggle. Keep the core experience fast and field-friendly as we grow.',
  },
  {
    slug: 'ardyn-fitness',
    name: 'Ardyn Fitness',
    tagline: 'Strength training guidance that adapts to your life.',
    positioning: 'Long-term strength building for adults with real schedules.',
    category: 'Consumer',
    status: 'Concept',
    capabilities: [
      'Adaptive workout programming',
      'Equipment-aware exercises',
      'Recovery-based scheduling',
    ],
    problem: 'Most fitness apps assume you have perfect consistency, unlimited equipment, and infinite motivation. Real life is messier. People miss workouts, travel, get injured, and have equipment constraints that generic programs ignore. The result: guilt cycles, wasted subscriptions, and abandoned fitness goals.',
    solution: 'Ardyn Fitness provides intelligent workout programming that adjusts to your actual schedule, available equipment, and energy levels. It learns from your patterns and suggests realistic modifications instead of making you feel guilty about missed sessions. The system treats missed workouts as data, not failures.',
    differentiator: 'We treat fitness as a long-term practice, not a 12-week challenge. The app focuses on sustainable progress and injury prevention rather than pushing users to exhaustion. No social features, no leaderboards, no gamification. Just thoughtful programming that respects the reality of adult life.',
    targetUsers: 'Adults who want to build strength consistently over years, not weeks. People who have tried other programs and found them too rigid or too focused on short-term results.',
    useCases: [
      'Working professionals fitting training around unpredictable schedules',
      'Parents managing workouts during limited free time',
      'Travelers maintaining strength with hotel gym equipment',
      'Returning athletes rebuilding after injury or time off',
    ],
    businessModel: 'Subscription-based with meaningful free tier (basic programming, limited history). Premium tier for adaptive features, detailed analytics, and unlimited workout history. No ads, no data selling.',
    distribution: 'Content marketing through honest fitness advice (blog, social). Partnerships with physical therapists and personal trainers for referrals. Organic app store growth. Community building in fitness forums focused on sustainable training.',
    roadmap: {
      now: 'Core concept validation. User research with 50+ potential users. MVP feature specification.',
      next: 'Closed beta with adaptive programming engine. Equipment library. Basic workout logging.',
      later: 'Recovery pattern learning. Physical therapist partnerships. Injury modification protocols.',
    },
    trustAndSafety: 'Health data handled with extra care. No sharing with third parties. Users own their data with full export capability. Clear guidance that app provides suggestions, not medical advice. Integration with HealthKit/Google Fit is opt-in only.',
    vision: 'Develop deeper personalization based on individual recovery patterns and life circumstances. Explore partnerships with physical therapists for users managing injuries or chronic conditions.',
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
]
