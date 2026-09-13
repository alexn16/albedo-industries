import { useEffect, useRef, useState } from 'react'

type Connection = { saveData?: boolean }
export default function HeroVideo({src,className='',poster='/media/ALBEDO - INDUSTRIES/hero-fallback.svg'}:{src:string;className?:string;poster?:string}){
  const ref=useRef<HTMLVideoElement>(null)
  const [enabled,setEnabled]=useState(false)
  const [failed,setFailed]=useState(false)
  useEffect(()=>{
    const query=window.matchMedia('(prefers-reduced-motion: reduce)')
    const update=()=>setEnabled(!query.matches&&!((navigator as Navigator&{connection?:Connection}).connection?.saveData))
    update();query.addEventListener('change',update);return()=>query.removeEventListener('change',update)
  },[])
  useEffect(()=>{if(!enabled)ref.current?.pause()},[enabled])
  return <><img src={poster} className="pointer-events-none absolute inset-0 h-full w-full object-cover" alt="" aria-hidden="true"/>{enabled&&!failed&&<video ref={ref} poster={poster} className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onError={()=>setFailed(true)}><source src={src} type="video/mp4"/></video>}</>
}
