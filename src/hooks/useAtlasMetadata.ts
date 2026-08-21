import { useEffect } from 'react'

export function useAtlasMetadata({name,country,description,route,title}:{name:string;country:string;description:string;route:string;title?:string}){
  useEffect(()=>{
    const pageTitle=title??`Project Atlas — ${name}, ${country} | Albedo Industries`
    const canonical=`https://www.albedo-industries.com/#${route}`
    const image='https://www.albedo-industries.com/atlas-social.svg'
    const values:[string,string][]=[
      ['meta[name="description"]',description],
      ['meta[property="og:title"]',pageTitle],
      ['meta[property="og:description"]',description],
      ['meta[property="og:url"]',canonical],
      ['meta[property="og:type"]','article'],
      ['meta[property="og:image"]',image],
      ['meta[name="twitter:title"]',pageTitle],
      ['meta[name="twitter:description"]',description],
      ['meta[name="twitter:image"]',image],
      ['link[rel="canonical"]',canonical],
    ]
    const oldTitle=document.title
    const old=values.map(([selector])=>document.querySelector(selector)?.getAttribute(selector.startsWith('link')?'href':'content'))
    document.title=pageTitle
    values.forEach(([selector,value])=>document.querySelector(selector)?.setAttribute(selector.startsWith('link')?'href':'content',value))
    const structured=document.createElement('script')
    structured.type='application/ld+json'
    structured.dataset.atlasMetadata='true'
    structured.text=JSON.stringify({'@context':'https://schema.org','@type':'WebPage',name:pageTitle,description,url:canonical,isPartOf:{'@type':'WebSite',name:'ALBEDO Industries',url:'https://www.albedo-industries.com/'},about:{'@type':'Project',name:'Project Atlas',description:'AI and data-centre infrastructure research, origination and validation initiative of ALBEDO Industries.'}})
    document.head.appendChild(structured)
    return()=>{structured.remove();document.title=oldTitle;values.forEach(([selector],i)=>{if(old[i])document.querySelector(selector)?.setAttribute(selector.startsWith('link')?'href':'content',old[i]!)})}
  },[name,country,description,route,title])
}
