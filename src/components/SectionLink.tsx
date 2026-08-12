import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

/** HashRouter-safe link: a plain href="#section" would replace the SPA route. */
export function SectionLink({id,children,className}:{id:string;children:React.ReactNode;className?:string}){
  const {pathname}=useLocation()
  return <Link to={{pathname,hash:`#${id}`}} className={className}>{children}</Link>
}

/** Scroll after a destination route renders, including on back/forward navigation. */
export function ScrollToSection(){
  const {pathname,hash}=useLocation()
  useEffect(()=>{
    if(!hash){window.scrollTo({top:0});return}
    let frame=0, attempts=0
    const scroll=()=>{const target=document.getElementById(decodeURIComponent(hash.slice(1)));if(target){target.scrollIntoView();target.focus({preventScroll:true})}else if(attempts++<120){frame=requestAnimationFrame(scroll)}}
    frame=requestAnimationFrame(scroll)
    return()=>cancelAnimationFrame(frame)
  },[pathname,hash])
  return null
}
