export type MetricKind = 'SOURCED INPUT' | 'SCENARIO ASSUMPTION' | 'DERIVED VALUE'
export interface ModelInput { id: string; label: string; value: number; unit: string; kind: MetricKind; sourceId?: string; rationale: string }
export interface DerivedMetric { id: string; label: string; value: number; unit: string; kind: 'DERIVED VALUE'; formula: string; inputIds: string[] }

// Scenario assumptions are sensitivity inputs, not forecasts or engineering specifications.
export const modelInputs: ModelInput[] = [
  { id: 'sigma', label: 'Stefan–Boltzmann constant (rounded)', value: 5.670374419e-8, unit: 'W/m²/K⁴', kind: 'SCENARIO ASSUMPTION', rationale: 'Used only for first-order calculation; authoritative source verification is required before treating it as a sourced public metric.' },
  { id: 'emissivity', label: 'Radiator emissivity', value: 0.9, unit: 'ratio', kind: 'SCENARIO ASSUMPTION', rationale: 'Illustrative high-emissivity surface assumption.' },
  { id: 'sink-temp', label: 'Effective sink temperature', value: 3, unit: 'K', kind: 'SCENARIO ASSUMPTION', rationale: 'Idealized deep-space sink; ignores Earth, Sun and view-factor loads.' },
  { id: 'array-density', label: 'Delivered array power density', value: 250, unit: 'W/m²', kind: 'SCENARIO ASSUMPTION', rationale: 'Sensitivity case after unspecified conversion/degradation allowance; not a selected design.' },
  { id: 'array-specific-power', label: 'Array specific power', value: 100, unit: 'W/kg', kind: 'SCENARIO ASSUMPTION', rationale: 'Sensitivity case; deployment structure, storage and distribution are excluded.' },
  { id: 'power-overhead', label: 'Power-system nameplate overhead', value: 1.5, unit: 'ratio', kind: 'SCENARIO ASSUMPTION', rationale: 'Illustrative allowance, not an eclipse-qualified architecture.' },
]

export const heatLoadsKw = [100, 1_000, 10_000, 100_000]
export const radiatorTemperaturesK = [300, 350, 400]
export const computeLoadsKw = [100, 1_000, 10_000, 100_000]
export const launchPricesUsdKg = [10_000, 5_000, 2_000, 1_000, 500, 100]
export const launchMassesTonnes = [10, 100, 1_000]

export function radiatorAreaM2(heatKw: number, temperatureK: number, emissivity = 0.9, sinkK = 3) {
  const sigma = 5.670374419e-8
  return heatKw * 1_000 / (emissivity * sigma * (temperatureK ** 4 - sinkK ** 4))
}
export function powerScenario(loadKw: number, overhead = 1.5, densityWm2 = 250, specificPowerWkg = 100) {
  const nameplateKw = loadKw * overhead
  return { nameplateKw, arrayAreaM2: nameplateKw * 1_000 / densityWm2, arrayMassKg: nameplateKw * 1_000 / specificPowerWkg }
}
export function launchCostUsd(massTonnes: number, priceUsdKg: number) { return massTonnes * 1_000 * priceUsdKg }

export const derivedMetrics: DerivedMetric[] = [
  ...radiatorTemperaturesK.flatMap(temp => heatLoadsKw.map(load => ({ id: `thermal-${load}-${temp}`, label: `${load} kW at ${temp} K`, value: radiatorAreaM2(load, temp), unit: 'm²', kind: 'DERIVED VALUE' as const, formula: 'Q / [εσ(T_rad⁴ − T_sink⁴)]', inputIds: ['sigma', 'emissivity', 'sink-temp'] }))),
  ...computeLoadsKw.flatMap(load => { const value=powerScenario(load); return [
    { id:`power-area-${load}`,label:`${load} kW array area`,value:value.arrayAreaM2,unit:'m²',kind:'DERIVED VALUE' as const,formula:'load × overhead × 1000 / W·m⁻²',inputIds:['array-density','power-overhead'] },
    { id:`power-mass-${load}`,label:`${load} kW array mass`,value:value.arrayMassKg,unit:'kg',kind:'DERIVED VALUE' as const,formula:'load × overhead × 1000 / W·kg⁻¹',inputIds:['array-specific-power','power-overhead'] },
  ]}),
  ...launchMassesTonnes.flatMap(mass => launchPricesUsdKg.map(price => ({ id:`launch-${mass}-${price}`,label:`${mass} t at $${price}/kg`,value:launchCostUsd(mass,price),unit:'USD',kind:'DERIVED VALUE' as const,formula:'tonnes × 1000 × USD/kg',inputIds:[] }))),
]
