import { useEffect, useRef, useState } from 'react'

type Connection = { saveData?: boolean }
export default function HeroVideo({ src, className = '', poster = '/media/ALBEDO - INDUSTRIES/hero-fallback.svg' }: { src: string; className?: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [failed, setFailed] = useState(false)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktop = window.matchMedia('(min-width: 768px)')
    const update = () => setEnabled(desktop.matches && !query.matches && !((navigator as Navigator & { connection?: Connection }).connection?.saveData))
    update()
    query.addEventListener('change', update)
    desktop.addEventListener('change', update)
    return () => { query.removeEventListener('change', update); desktop.removeEventListener('change', update) }
  }, [])
  useEffect(() => {
    if (!enabled || paused) ref.current?.pause()
    else void ref.current?.play().catch(() => setPaused(true))
  }, [enabled, paused])
  return <>
    <img src={poster} className="pointer-events-none absolute inset-0 h-full w-full object-cover" alt="" aria-hidden="true" />
    {enabled && !failed && <>
      <video ref={ref} poster={poster} className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onError={() => setFailed(true)}><source src={src} type="video/mp4" /></video>
      <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play background video' : 'Pause background video'} className="absolute bottom-5 right-5 z-20 inline-flex min-h-11 items-center gap-2 border border-white/40 bg-black/70 px-4 text-xs font-medium text-white hover:bg-black"><span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>{paused ? 'Play motion' : 'Pause motion'}</button>
    </>}
  </>
}
