export interface Project {
  slug: string
  name: string
  tagline: string
  category: 'Consumer' | 'B2B'
  status: 'Live' | 'Building' | 'Concept'
  problem: string
  solution: string
  differentiator: string
  targetUsers: string
  vision: string
  website?: string
  app?: string
}

export const projects: Project[] = [
  {
    slug: 'alb-parking',
    name: 'ALB Parking',
    tagline: 'Simple, stress-free parking for everyday drivers.',
    category: 'Consumer',
    status: 'Live',
    problem: 'Finding parking in busy areas is frustrating and time-consuming. Most parking apps are cluttered with features nobody asked for, and the experience of actually paying for parking remains unnecessarily complicated.',
    solution: 'ALB Parking shows you available spots nearby, lets you pay in seconds, and reminds you before your time expires. No account required for basic use. No ads. No upsells.',
    differentiator: 'We focused on doing one thing well instead of trying to be a super-app. The interface is minimal by design. We partnered directly with parking operators to ensure real-time availability data, not estimates.',
    targetUsers: 'Daily commuters, city residents, and anyone who regularly parks in metered or managed lots. Particularly useful for people who value their time and prefer tools that stay out of the way.',
    vision: 'Expand coverage to more cities while maintaining the same simple experience. Explore integrations with navigation apps so parking becomes a seamless part of any trip, not an afterthought.',
    website: '#',
    app: '#',
  },
  {
    slug: 'foreman',
    name: 'Foreman',
    tagline: 'Job management for construction teams that actually gets used.',
    category: 'B2B',
    status: 'Building',
    problem: 'Construction project management software is either too complex for small teams or too basic to be useful. Field workers avoid using tools that slow them down, which leads to communication gaps and costly mistakes.',
    solution: 'Foreman is built for how construction teams actually work. Quick job logging from the field, automatic photo documentation, and simple scheduling that syncs across the whole crew. Works offline, syncs when connected.',
    differentiator: 'We spent months on job sites before writing a line of code. Every feature exists because we watched someone struggle without it. The app is designed for gloved hands and bright sunlight, not conference room demos.',
    targetUsers: 'Small to mid-size construction companies, general contractors, and specialty trade teams. Particularly suited for teams of 5-50 who need structure without bureaucracy.',
    vision: 'Build out material tracking and simple invoicing to reduce the number of tools teams need to juggle. Keep the core experience fast and field-friendly as we grow.',
  },
  {
    slug: 'ardyn-fitness',
    name: 'Ardyn Fitness',
    tagline: 'Strength training guidance that adapts to your life.',
    category: 'Consumer',
    status: 'Concept',
    problem: 'Most fitness apps assume you have perfect consistency, unlimited equipment, and infinite motivation. Real life is messier. People miss workouts, travel, get injured, and have equipment constraints that generic programs ignore.',
    solution: 'Ardyn Fitness provides intelligent workout programming that adjusts to your actual schedule, available equipment, and energy levels. It learns from your patterns and suggests realistic modifications instead of making you feel guilty about missed sessions.',
    differentiator: 'We treat fitness as a long-term practice, not a 12-week challenge. The app focuses on sustainable progress and injury prevention rather than pushing users to exhaustion. No social features, no leaderboards, no gamification.',
    targetUsers: 'Adults who want to build strength consistently over years, not weeks. People who have tried other programs and found them too rigid or too focused on short-term results.',
    vision: 'Develop deeper personalization based on individual recovery patterns and life circumstances. Explore partnerships with physical therapists for users managing injuries or chronic conditions.',
  },
]
