export type LocationStatus = 'Under evaluation' | 'Development' | 'Construction' | 'Operational'
export type VerificationStatus = 'Unverified' | 'In review' | 'Verified'
export type ActionStatus = 'To assess' | 'Identified' | 'Discussion' | 'Planned' | 'Active' | 'Completed'

export type SourcedValue<T> = {
  value: T
  period: string
  source: string
  verification: VerificationStatus
}

export type ContextField = {
  label: string
  value: string
  source?: string
  verification: VerificationStatus
}

export type CapabilityAssessment = {
  capability: string
  projectRequirement: string
  localAvailability?: string
  developmentGap?: string
  source?: string
  verification: VerificationStatus
}

export type EducationProspect = {
  institution: string
  capabilities: string
  potentialCollaboration: string
  status: 'Potential' | 'Discussion' | 'Confirmed'
  nextAction: string
  source?: string
}

export type LocationAction = {
  action: string
  partnerType: string
  phase: 'Site evaluation' | 'Development' | 'Pre-construction' | 'Construction' | 'Operations' | 'Regional growth'
  status: ActionStatus
  nextStep: string
}

export type LocationMetric = {
  label: string
  data?: SourcedValue<number | string>
}

export type AtlasFoundationLocation = {
  slug: string
  published: boolean
  identity: {
    region: string
    municipality: string
    country: string
    status: LocationStatus
    atlasProjectConfirmed: boolean
  }
  regionalContext: {
    populationLabourMarket?: ContextField
    industrialProfile?: ContextField
    existingInfrastructure?: ContextField
    educationalInstitutions?: ContextField
    majorEmployers?: ContextField
    economicDevelopmentPriorities?: ContextField
    localStrengths?: ContextField
  }
  priorities: string[]
  regionalInputs: ContextField[]
  capabilities: CapabilityAssessment[]
  trainingPriorities: string[]
  employment: {
    construction: string
    operations: string
    supplyChain: string
    widerEconomy: string
    estimates: LocationMetric[]
  }
  supplierCategories: string[]
  educationProspects: EducationProspect[]
  businessOpportunities: string[]
  actions: LocationAction[]
  metrics: LocationMetric[]
  sources: { title: string; href: string; accessed: string }[]
  ctas: { partnership: string; project: string }
}

// Publish a plan only after its identity, project relationship and source base are verified.
// Candidate research pages are not automatically Foundation programmes.
export const atlasFoundationLocations: AtlasFoundationLocation[] = []

export const locationFramework = {
  regionalInputs: ['Workforce availability', 'Unemployment and employability', 'Existing technical skills', 'Vocational education', 'University capabilities', 'Local contractors', 'Industrial companies', 'Energy sector', 'Construction capacity', 'Logistics', 'SME base', 'Technology ecosystem', 'Economic-development priorities'],
  projectCapabilities: ['Civil construction', 'Electrical installation', 'Mechanical installation', 'HVAC and cooling', 'Fibre and networking', 'Energy infrastructure', 'Maintenance', 'Security', 'Logistics', 'Operations', 'Facility management'],
  supplierCategories: ['Construction', 'Electrical', 'HVAC', 'Mechanical', 'Engineering', 'Security', 'Logistics', 'Maintenance', 'Cleaning', 'Catering', 'Accommodation', 'Transport', 'Landscaping', 'Professional services'],
  educationTypes: ['Vocational schools', 'Technical institutes', 'Universities', 'Schools', 'Training organisations'],
  businessOpportunities: ['AI infrastructure', 'Technology', 'Engineering', 'Energy', 'Digital services', 'Industrial maintenance', 'Infrastructure supply', 'Professional services', 'Logistics', 'Training', 'Startups'],
  metrics: ['Local workers', 'People trained', 'Apprenticeships', 'Local suppliers', 'Procurement spend', 'Educational partners', 'Supplier-development participants', 'Jobs supported', 'Businesses participating', 'Complementary investment'],
} as const
