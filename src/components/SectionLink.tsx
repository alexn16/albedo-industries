import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate, useNavigationType } from 'react-router-dom'
import { resolveAtlasSection } from '../routes/atlasSections'
import { resolveDisplaySection } from '../routes/displaySections'

/** HashRouter-safe link: a plain href="#section" would replace the SPA route. */
export function SectionLink({id,children,className}:{id:string;children:React.ReactNode;className?:string}){
  const {pathname}=useLocation()
  return <Link to={{pathname,hash:`#${id}`}} className={className}>{children}</Link>
}

/** Scroll after a destination route renders, including on back/forward navigation. */
export function ScrollToSection(){
  const location=useLocation()
  const {pathname,hash}=location
  const navigate=useNavigate()
  const navigationType=useNavigationType()
  const firstRender=useRef(true)
  useEffect(()=>{
    const requested=new URLSearchParams(location.search).get('section') || hash.slice(1)
    const atlasSection=pathname==='/atlas' ? resolveAtlasSection(requested) : null
    const displaySection=pathname==='/display' ? resolveDisplaySection(requested) : null
    const section=pathname==='/atlas' ? atlasSection : pathname==='/display' ? displaySection : requested
    // Normalise both historic aliases and /#/atlas#section links into the one
    // canonical query-based representation without adding a history entry.
    if(pathname==='/atlas' && atlasSection && (hash || requested!==atlasSection)){
      navigate({pathname:'/atlas',search:`?section=${atlasSection}`},{replace:true})
      return
    }
    if(pathname==='/display' && requested && !displaySection){navigate('/display',{replace:true});return}
    if(!section){window.scrollTo({top:0});firstRender.current=false;return}
    let frame=0, attempts=0
    const scroll=()=>{const target=document.getElementById(decodeURIComponent(section));if(target){
      const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({behavior:!firstRender.current && navigationType==='PUSH' && !reduceMotion?'smooth':'auto',block:'start'})
      firstRender.current=false
    }else if(attempts++<120){frame=requestAnimationFrame(scroll)}}
    frame=requestAnimationFrame(scroll)
    return()=>cancelAnimationFrame(frame)
  },[pathname,hash,location.search,navigate,navigationType])
  return null
}
