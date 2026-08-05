import { asPontesPublication } from './asPontesResearch'
import type { EvidenceState } from './infrastructureCandidates'

export type AtlasLanguage = 'es' | 'en' | 'pt' | 'de' | 'fr' | 'sv' | 'fi' | 'no' | 'pl' | 'gl'
export type AtlasCtaKind = 'capacity' | 'partner' | 'investor' | 'follow' | 'download'

export interface AtlasCandidatePublication {
  id: string
  slug: string
  country: string
  region: string
  localLanguage: AtlasLanguage
  secondaryLanguage: AtlasLanguage
  locationName: string
  gate: string
  publicStatus: string
  lastUpdated: string
  report: { href: string; downloadName: string; title: string }
  media: {
    heroImage?: string
    heroAlt: string
    regionalImage?: string
    infrastructureImage?: string
    localEconomyImage?: string
    mapEnabled?: boolean
  }
  copy: Partial<Record<AtlasLanguage, {
    backLabel: string
    statusLabel: string
    headline: string
    proposition: string
    primaryCta: string
    secondaryCta: string
    boundaryDisclaimer: string
    metrics: Array<{ value: string; label: string; evidenceStatus: EvidenceState; explanation?: string }>
    opportunityCards: Array<{ title: string; explanation: string; icon: string; evidenceClassification: EvidenceState }>
    decisiveQuestion: { question: string; currentAnswer: string; explanation: string; status: EvidenceState; evidenceNeeded: string }
    audienceTitle: string
    ctas: Array<{ kind: AtlasCtaKind; label: string; href: string; description: string }>
    technicalTitle: string
    technicalSummary: string
    verifiedFacts: string[]
    evidenceRequired: string[]
    majorRisks: string[]
    gateDecision: string
    sourcesTitle: string
    updatesTitle: string
    boundariesTitle: string
    boundaries: string[]
    reviewed: string
  }>>
}

export const localLanguageByCountry: Record<string, AtlasLanguage> = {
  Spain: 'es', Portugal: 'pt', Germany: 'de', France: 'fr', Sweden: 'sv', Finland: 'fi', Norway: 'no', Poland: 'pl',
}

const asPontesReport = '/media/albedo-industries/atlas-as-pontes-gate-1-research-report.pdf'

export const atlasCandidatePublications: Record<string, AtlasCandidatePublication> = {
  'EU-ES-01': {
    id: 'EU-ES-01', slug: 'as-pontes', country: 'Spain', region: 'Galicia', localLanguage: 'es', secondaryLanguage: 'en', locationName: 'As Pontes', gate: 'Gate 1', publicStatus: 'Candidato de investigación publicado', lastUpdated: '2026-08-04',
    report: { href: asPontesReport, downloadName: 'Atlas As Pontes Gate 1 Research Report.pdf', title: asPontesPublication.title },
    media: { heroAlt: 'Composición conceptual de red eléctrica e industria en As Pontes; no representa un centro de datos construido.', mapEnabled: true },
    copy: {
      es: {
        backLabel: '← Investigación europea', statusLabel: 'Candidato público de Atlas', headline: 'As Pontes: nueva oportunidad para la computación avanzada en Galicia.', proposition: 'Estudiamos si su legado energético, industrial y territorial puede transformarse en capacidad europea de computación avanzada.', primaryCta: 'Ver la cuestión clave', secondaryCta: 'Descargar informe técnico', boundaryDisclaimer: 'Aún no hay terreno bajo control, potencia de red confirmada, permisos, clientes, financiación ni obras iniciadas.',
        metrics: [
          { value: '1.403,5 MW', label: 'escala de generación anterior', evidenceStatus: 'verified', explanation: 'Referencia histórica de la antigua central térmica.' },
          { value: '400 kV', label: 'entorno de transporte eléctrico', evidenceStatus: 'verified', explanation: 'Hay red de alta tensión en la zona, pero eso no prueba potencia disponible para consumo.' },
          { value: 'Gate 1', label: 'fase Atlas', evidenceStatus: 'decision_pending', explanation: 'Oportunidad en estudio con comprobaciones críticas abiertas.' },
          { value: '0 MW', label: 'potencia de consumo confirmada', evidenceStatus: 'evidence_required', explanation: 'No existe todavía una confirmación escrita de potencia para un gran consumidor.' },
        ],
        opportunityCards: [
          { title: 'Legado energético', icon: '⚡', evidenceClassification: 'verified', explanation: 'Décadas de actividad energética dejaron capacidades industriales, técnicas y territoriales relevantes.' },
          { title: 'Infraestructura industrial', icon: '🏗️', evidenceClassification: 'hypothesis', explanation: 'La zona conoce proyectos industriales complejos; falta concretar suelo viable y controlable.' },
          { title: 'Transición económica', icon: '↗', evidenceClassification: 'hypothesis', explanation: 'La transición puede ganar valor si atrae actividad digital real, medible y conectada al territorio.' },
        ],
        decisiveQuestion: { question: '¿Existe una vía realista para conectar un gran consumidor eléctrico?', currentAnswer: 'Todavía no está demostrado.', explanation: 'La red cercana no basta: hace falta una respuesta formal sobre potencia, refuerzos, coste y calendario.', status: 'evidence_required', evidenceNeeded: 'Confirmación escrita de ruta de conexión, potencia, refuerzos, coste y plazo para una demanda definida.' },
        audienceTitle: 'Elige tu vía de contacto', ctas: [
          { kind: 'capacity', label: 'Necesito capacidad de computación', href: '#candidate-demand', description: 'Cuéntanos tu necesidad de capacidad, sin compromiso ni reserva.' },
          { kind: 'partner', label: 'Puedo aportar suelo, energía, fibra o ingeniería', href: '#partner-context', description: 'Comparte suelo, energía, fibra o capacidades técnicas relevantes.' },
          { kind: 'investor', label: 'Quiero hablar sobre financiación o colaboración', href: '#partner-context', description: 'Abre una conversación sobre capital o colaboración, sin oferta de inversión.' },
          { kind: 'follow', label: 'Quiero seguir el proyecto', href: '#follow-project', description: 'Recibe novedades cuando avance la fase de estudio.' },
          { kind: 'download', label: 'Descargar informe técnico', href: asPontesReport, description: 'Consulta el informe completo en PDF.' },
        ],
        technicalTitle: 'Detalles técnicos', technicalSummary: 'Resumen de comprobaciones, riesgos y fuentes para lectores que quieran profundizar.', verifiedFacts: asPontesPublication.verifiedFacts.map((fact) => fact.value), evidenceRequired: asPontesPublication.findings.map((finding) => finding.next), majorRisks: ['Que no exista una conexión viable para una gran demanda eléctrica.', 'Que no aparezca suelo controlable y compatible.', 'Que fibra, agua, permisos o plazos no encajen comercialmente.'], gateDecision: 'Seguir estudiando. No pasar a desarrollo hasta demostrar una vía de conexión para consumo eléctrico.', sourcesTitle: 'Fuentes', updatesTitle: 'Actualizaciones', boundariesTitle: 'Qué no está probado todavía', boundaries: ['Sin terreno bajo control', 'Sin potencia de red confirmada', 'Sin permisos', 'Sin clientes comprometidos', 'Sin financiación comprometida', 'Sin obras iniciadas'], reviewed: 'Revisión: 4 de agosto de 2026',
      },
      en: {
        backLabel: '← Europe research', statusLabel: 'Public Atlas candidate', headline: 'As Pontes could become critical energy infrastructure again.', proposition: 'Hypothesis: As Pontes’ industrial and electrical legacy could serve intensive compute if a real connection path for a large electricity consumer is proven.', primaryCta: 'See the decisive question', secondaryCta: 'Download technical report', boundaryDisclaimer: 'No land, grid capacity, permits, customers, financing or construction are secured for this candidate.',
        metrics: [ { value: '1,403.5 MW', label: 'former thermal capacity', evidenceStatus: 'verified', explanation: 'Four coal units definitively closed.' }, { value: '400 kV', label: 'transmission context', evidenceStatus: 'verified', explanation: 'High-voltage infrastructure in the area; not available capacity.' }, { value: 'Gate 1', label: 'research stage', evidenceStatus: 'decision_pending', explanation: 'Public screening: attractive thesis, evidence pending.' }, { value: '0 MW', label: 'confirmed demand capacity', evidenceStatus: 'evidence_required', explanation: 'No Atlas electrical demand capacity is secured.' } ],
        opportunityCards: [ { title: 'Energy legacy', icon: '⚡', evidenceClassification: 'verified', explanation: 'As Pontes concentrated generation, electrical operation and industrial knowledge for decades.' }, { title: 'Industrial infrastructure', icon: '🏗️', evidenceClassification: 'hypothesis', explanation: 'The area has large-scale history, logistics and transition context, but no parcel is secured.' }, { title: 'Economic transition', icon: '↗', evidenceClassification: 'hypothesis', explanation: 'The public opportunity is to turn inherited industrial capacity into verifiable digital employment.' } ],
        decisiveQuestion: { question: 'Can a large electricity consumer connect?', currentAnswer: 'Not yet demonstrated.', explanation: 'Network and substation context does not confirm capacity, cost, timing or permits for a data load.', status: 'evidence_required', evidenceNeeded: 'Written response on route, capacity, reinforcements, cost and timeline for a defined load.' }, audienceTitle: 'Tell us why you are here',
        ctas: [ { kind: 'capacity', label: 'I need compute capacity', href: '#candidate-demand', description: 'Register non-binding demand to validate the market.' }, { kind: 'partner', label: 'I can contribute land, energy, fibre or engineering', href: '#partner-context', description: 'Contribute local evidence or technical capability.' }, { kind: 'investor', label: 'I want to discuss capital', href: '#partner-context', description: 'Register non-binding investment or strategic partner interest.' }, { kind: 'follow', label: 'I want to follow the project', href: '#follow-project', description: 'Receive updates when the Gate changes.' }, { kind: 'download', label: 'Download full report', href: asPontesReport, description: 'Read the complete technical PDF dossier.' } ],
        technicalTitle: 'Technical details', technicalSummary: 'The public page summarises the thesis. The report keeps sources, boundaries, tables and next work.', verifiedFacts: asPontesPublication.verifiedFacts.map((fact) => fact.value), evidenceRequired: asPontesPublication.findings.map((finding) => finding.next), majorRisks: ['No viable connection for a large electricity demand.', 'No controllable or compliant parcel.', 'Fibre, water, permitting or timetable is commercially unusable.'], gateDecision: 'Continue researching. Do not advance to development until demand connection is proven.', sourcesTitle: 'Sources', updatesTitle: 'Updates', boundariesTitle: 'Current boundaries', boundaries: ['No land secured', 'No grid capacity confirmed', 'No permits', 'No customers', 'No financing', 'No construction'], reviewed: 'Reviewed 4 August 2026',
      },
    },
  },
}
