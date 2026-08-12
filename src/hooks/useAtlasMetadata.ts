import { useEffect } from 'react'

export function useAtlasMetadata({name,country,description,route}:{name:string;country:string;description:string;route:string}){
  useEffect(()=>{
    const title=`Project Atlas — ${name}, ${country} | Albedo Industries`
    const canonical=`https://www.albedo-industries.com/#${route}`
    const values:[string,string][]=[
      ['meta[name="description"]',description],
      ['meta[property="og:title"]',title],
      ['meta[property="og:description"]',description],
      ['meta[property="og:url"]',canonical],
      ['meta[property="og:type"]','article'],
      ['link[rel="canonical"]',canonical],
    ]
    const oldTitle=document.title
    const old=values.map(([selector])=>document.querySelector(selector)?.getAttribute(selector.startsWith('link')?'href':'content'))
    document.title=title
    values.forEach(([selector,value])=>document.querySelector(selector)?.setAttribute(selector.startsWith('link')?'href':'content',value))
    return()=>{document.title=oldTitle;values.forEach(([selector],i)=>{if(old[i])document.querySelector(selector)?.setAttribute(selector.startsWith('link')?'href':'content',old[i]!)})}
  },[name,country,description,route])
}
