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
]
