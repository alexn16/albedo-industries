export const asPontesPublication = {
  title: 'As Pontes: evidence review for AI infrastructure', edition: 'Research note 01', published: '2026-08-04',
  pdf: '/media/albedo-industries/atlas-as-pontes-gate-1-research-report.pdf',
  downloadName: 'Atlas As Pontes Gate 1 Research Report.pdf',
  conclusion: 'As Pontes has a verified energy and industrial-transition context, but the public evidence reviewed does not establish an available data-centre site or a viable demand connection. The candidate therefore remains at Gate 1 research.',
  verifiedFacts: [
    { label: 'Generation legacy', value: 'Spain authorised the definitive closure of the four As Pontes coal units (1,403.5 MW in total) in August 2023.', source: 'AP-01' },
    { label: 'Industrial transition', value: 'As Pontes is included in the Ferrolterra Just Transition Agreement area, where public bodies coordinate post-coal economic diversification.', source: 'AP-02' },
    { label: 'Mine restoration', value: 'The former lignite mine was restored as a lake and surrounding habitat; this is environmental context, not evidence of developable land.', source: 'AP-03' },
    { label: 'Transmission context', value: 'Red Eléctrica publishes an As Pontes transmission node in its network material. A mapped node does not prove demand-side capacity or a connection offer.', source: 'AP-04' },
    { label: 'Planning authority', value: 'Municipal planning and permits are administered through As Pontes council and the applicable Galician planning framework. No parcel has been screened.', source: 'AP-05' },
  ],
  findings: [
    { area: 'Power', state: 'Context verified; capacity unverified', finding: 'The former power complex and transmission node justify further study. Public network context cannot substitute for a written access-and-connection study for a defined load and location.', next: 'Define an indicative load profile and obtain a written connection-route, capacity, reinforcement, cost and timetable response.' },
    { area: 'Land and planning', state: 'Evidence required', finding: 'The research found no controlled parcel, planning certificate or development agreement. Restored mine land must not be treated as available industrial land.', next: 'Identify candidate parcels, ownership, zoning, easements, geotechnical conditions and environmental constraints.' },
    { area: 'Fibre', state: 'Evidence required', finding: 'General connectivity programmes do not verify two physically diverse carrier routes to a candidate parcel.', next: 'Commission carrier route surveys with measured latency, diversity and delivery terms.' },
    { area: 'Water and cooling', state: 'Evidence required', finding: 'The mine lake is a restored environmental asset, not a confirmed cooling-water source. No abstraction, discharge or cooling design has been established.', next: 'Prioritise low-water cooling options and obtain hydrological and permitting advice for any water use.' },
    { area: 'Delivery and demand', state: 'Evidence required', finding: 'Industrial history supports a workforce and logistics question, but no construction plan, anchor customer or qualified capacity demand has been verified.', next: 'Run supply-chain interviews and secure qualified, non-binding demand evidence before technical design.' },
  ],
  sources: [
    { id: 'AP-01', title: 'Authorisation for definitive closure of the As Pontes thermal power plant', publisher: 'Ministry for the Ecological Transition and the Demographic Challenge', url: 'https://www.miteco.gob.es/es/prensa/ultimas-noticias/2023/08/el-miteco-autoriza-el-cierre-definitivo-de-la-central-termica-de-a.html' },
    { id: 'AP-02', title: 'Ferrolterra Just Transition Agreement', publisher: 'Institute for Just Transition', url: 'https://www.transicionjusta.gob.es/Convenios_transicion_justa/ferrolterra-ctj.html' },
    { id: 'AP-03', title: 'As Pontes mine environmental restoration', publisher: 'Endesa', url: 'https://www.endesa.com/en/projects/all-projects/energy-transition/just-transition/as-pontes' },
    { id: 'AP-04', title: 'Maps of the transmission network', publisher: 'Red Eléctrica', url: 'https://www.ree.es/en/datos/publications/maps-of-the-transmission-network' },
    { id: 'AP-05', title: 'Urban planning and municipal information', publisher: 'Concello das Pontes de García Rodríguez', url: 'https://aspontes.org/' },
  ],
} as const
