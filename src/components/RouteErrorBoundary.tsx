import { Component, type ReactNode } from 'react'
const refreshKey = 'albedo-chunk-recovery'
const isChunkError = (error: Error) => /(?:Failed to fetch dynamically imported module|Importing a module script failed|Loading chunk \d+ failed)/i.test(error.message)
export default class RouteErrorBoundary extends Component<{ children: ReactNode }, { error?: Error }> {
  state: { error?: Error } = {}
  static getDerivedStateFromError(error: Error) { return { error } }
  componentDidCatch(error: Error) { if (isChunkError(error) && sessionStorage.getItem(refreshKey) !== 'attempted') { sessionStorage.setItem(refreshKey, 'attempted'); window.location.reload() } }
  render() { if (!this.state.error) return this.props.children; return <main className="mx-auto min-h-[45vh] max-w-3xl px-6 py-20" role="alert"><p className="eyebrow">ALBEDO · PROJECT ATLAS</p><h1 className="mt-4 text-3xl font-semibold">This page could not be updated.</h1><p className="mt-4 text-zinc-600">Please refresh once more. If the problem continues, contact ALBEDO and include the link you opened.</p><button className="mt-7 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white" onClick={() => window.location.reload()}>Refresh page</button></main> }
}
