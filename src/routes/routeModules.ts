export const routeModules = {
  about: () => import('../pages/About'), projects: () => import('../pages/Projects'), project: () => import('../pages/ProjectDetail'),
  foreman: () => import('../pages/Foreman'), fastSoftware: () => import('../pages/FastSoftware'), purchasingAgent: () => import('../pages/PurchasingAgentDemo'),
  updates: () => import('../pages/Updates'), support: () => import('../pages/Support'), privacy: () => import('../pages/Privacy'), terms: () => import('../pages/Terms'), security: () => import('../pages/Security'),
  compute: () => import('../pages/ComputeInfrastructure'), atlas: () => import('../pages/InfrastructureEurope'), country: () => import('../pages/InfrastructureCountry'), candidate: () => import('../pages/InfrastructureCandidate'),
  partners: () => import('../pages/InfrastructureFunding'), research: () => import('../pages/AtlasResearch'), asPontesResearch: () => import('../pages/AsPontesResearch'),
  elBierzo: () => import('../pages/atlas/ElBierzoCandidatePage'), canelones: () => import('../pages/atlas/CanelonesCandidatePage'), sines: () => import('../pages/atlas/SinesCandidatePage'),
  asPontes: () => import('../pages/atlas/AsPontesCandidatePage'), kouvolaKotka: () => import('../pages/atlas/KouvolaKotkaCandidatePage'),
  display: () => import('../pages/AlbedoDisplay'), displayInvest: () => import('../pages/AlbedoDisplayInvest'),
} as const
export type RouteModule = keyof typeof routeModules
export function prefetchRoute(route: RouteModule) {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  if (!connection?.saveData) void routeModules[route]()
}
export const intentPrefetch = (route: RouteModule) => ({ onMouseEnter: () => prefetchRoute(route), onFocus: () => prefetchRoute(route), onTouchStart: () => prefetchRoute(route) })
