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
        backLabel: '← Investigación europea', statusLabel: 'Candidato público de Atlas', headline: 'As Pontes puede volver a ser infraestructura energética crítica.', proposition: 'Hipótesis: el legado industrial y eléctrico de As Pontes podría servir a computación intensiva si se demuestra una conexión real para un gran consumidor.', primaryCta: 'Ver la pregunta decisiva', secondaryCta: 'Descargar informe técnico', boundaryDisclaimer: 'No hay suelo, capacidad de red, permisos, clientes, financiación ni construcción asegurados para este candidato.',
        metrics: [
          { value: '1.403,5 MW', label: 'capacidad térmica anterior', evidenceStatus: 'verified', explanation: 'Cuatro grupos de carbón cerrados definitivamente.' },
          { value: '400 kV', label: 'contexto de transmisión', evidenceStatus: 'verified', explanation: 'Infraestructura de alta tensión en el área; no equivale a capacidad disponible.' },
          { value: 'Gate 1', label: 'fase de investigación', evidenceStatus: 'decision_pending', explanation: 'Cribado público: tesis atractiva, pruebas pendientes.' },
          { value: '0 MW', label: 'demanda confirmada', evidenceStatus: 'evidence_required', explanation: 'No hay capacidad de consumo eléctrico asegurada para Atlas.' },
        ],
        opportunityCards: [
          { title: 'Legado energético', icon: '⚡', evidenceClassification: 'verified', explanation: 'As Pontes concentró generación, operación eléctrica y conocimiento industrial durante décadas.' },
          { title: 'Infraestructura industrial', icon: '🏗️', evidenceClassification: 'hypothesis', explanation: 'El entorno tiene historia de gran escala, logística y reconversión, pero ninguna parcela está asegurada.' },
          { title: 'Transición económica', icon: '↗', evidenceClassification: 'hypothesis', explanation: 'La oportunidad pública es convertir capacidad industrial heredada en empleo digital verificable.' },
        ],
        decisiveQuestion: { question: '¿Puede conectarse un gran consumidor eléctrico?', currentAnswer: 'Todavía no está demostrado.', explanation: 'La existencia de red y subestaciones no confirma capacidad, coste, plazo ni permisos para una carga de datos.', status: 'evidence_required', evidenceNeeded: 'Respuesta escrita sobre ruta, capacidad, refuerzos, coste y calendario para una carga definida.' },
        audienceTitle: 'Dinos por qué estás aquí', ctas: [
          { kind: 'capacity', label: 'Necesito capacidad de computación', href: '#candidate-demand', description: 'Registra demanda no vinculante para validar mercado.' },
          { kind: 'partner', label: 'Puedo aportar suelo, energía, fibra o ingeniería', href: '#partner-context', description: 'Aporta evidencia local o capacidades técnicas.' },
          { kind: 'investor', label: 'Quiero hablar de capital', href: '#partner-context', description: 'Registra interés de inversión o colaboración estratégica no vinculante.' },
          { kind: 'follow', label: 'Quiero seguir el proyecto', href: '#follow-project', description: 'Recibe actualizaciones cuando cambie el Gate.' },
          { kind: 'download', label: 'Descargar informe completo', href: asPontesReport, description: 'Lee el dossier técnico completo en PDF.' },
        ],
        technicalTitle: 'Detalles técnicos', technicalSummary: 'La página pública resume la tesis. El informe conserva fuentes, límites, tablas y próximos trabajos.', verifiedFacts: asPontesPublication.verifiedFacts.map((fact) => fact.value), evidenceRequired: asPontesPublication.findings.map((finding) => finding.next), majorRisks: ['No conexión viable para una gran demanda eléctrica.', 'Ninguna parcela controlable o compatible.', 'Fibra, agua, permisos o calendario comercialmente inviables.'], gateDecision: 'Continuar investigando. No avanzar a desarrollo hasta demostrar conexión de demanda.', sourcesTitle: 'Fuentes', updatesTitle: 'Actualizaciones', boundariesTitle: 'Límites actuales', boundaries: ['No hay suelo asegurado', 'No hay capacidad de red confirmada', 'No hay permisos', 'No hay clientes', 'No hay financiación', 'No hay construcción'], reviewed: 'Revisado el 4 de agosto de 2026',
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
