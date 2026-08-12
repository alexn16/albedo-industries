import { useEffect,useState } from 'react'
import type { AtlasLocale } from '../components/atlas/AtlasPrimitives'
export function useAtlasShellLanguage(){
 const [locale,setLocale]=useState<AtlasLocale>(()=>(document.documentElement.lang as AtlasLocale)||'en')
 useEffect(()=>{const update=(event:Event)=>setLocale((event as CustomEvent<AtlasLocale>).detail);window.addEventListener('atlas-language-change',update);return()=>window.removeEventListener('atlas-language-change',update)},[])
 return locale
}
