import { Link } from 'react-router-dom'
import { useAtlasShellLanguage } from '../hooks/useAtlasShellLanguage'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const locale=useAtlasShellLanguage()
  const t={en:['Intelligent infrastructure for software, mobility and compute.','Company','About','Projects','Compute infrastructure','Project Atlas','Investment & Partnerships','Updates','Products','Legal','Privacy Policy','Terms of Service','Security','Contact','Project, partnership and general enquiries.','All rights reserved.','Building quietly, shipping steadily.'],es:['Infraestructura inteligente para software, movilidad y computación.','Empresa','Acerca de','Proyectos','Infraestructura de computación','Project Atlas','Inversión y colaboraciones','Novedades','Productos','Avisos legales','Política de privacidad','Condiciones del servicio','Seguridad','Contacto','Consultas sobre proyectos, colaboraciones y asuntos generales.','Todos los derechos reservados.','Construimos con discreción y entregamos con constancia.'],pt:['Infraestruturas inteligentes para software, mobilidade e computação.','Empresa','Sobre nós','Projetos','Infraestruturas de computação','Project Atlas','Investimento e parcerias','Atualizações','Produtos','Informação legal','Política de privacidade','Termos de serviço','Segurança','Contacto','Consultas sobre projetos, parcerias e assuntos gerais.','Todos os direitos reservados.','Construímos com discrição e entregamos com consistência.'],fi:['Älykästä infrastruktuuria ohjelmistoille, liikkuvuudelle ja laskennalle.','Yritys','Tietoa meistä','Hankkeet','Laskentainfrastruktuuri','Project Atlas','Sijoitukset ja kumppanuudet','Päivitykset','Tuotteet','Oikeudelliset tiedot','Tietosuojakäytäntö','Käyttöehdot','Tietoturva','Yhteystiedot','Hanke-, kumppanuus- ja yleiset tiedustelut.','Kaikki oikeudet pidätetään.','Rakennamme harkiten ja toimitamme johdonmukaisesti.']}[locale]

  const contactHref = 'mailto:alex@albedo-industries.com?subject=ALBEDO%20Industries%20inquiry&body=Hi%20ALBEDO%2C%0A%0AI%E2%80%99d%20like%20to%20get%20in%20touch%20about%20ALBEDO%20Industries.%0A%0ATopic%3A%0A%0ACompany%20%2F%20project%3A%0A%0AThanks.'

  return (
    <footer className="border-t border-zinc-200 mt-auto bg-zinc-950 text-zinc-400">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-lg font-semibold tracking-tight text-white">
              ALBEDO
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              {t[0]}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-zinc-300">{t[1]}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">{t[2]}</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">{t[3]}</Link></li>
              <li><Link to="/compute-infrastructure" className="hover:text-white transition-colors">{t[4]}</Link></li>
              <li><Link to="/atlas" className="hover:text-white transition-colors">{t[5]}</Link></li>
              <li><Link to="/atlas/partners" className="hover:text-white transition-colors">{t[6]}</Link></li>
              <li><Link to="/updates" className="hover:text-white transition-colors">{t[7]}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-zinc-300">{t[8]}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/fastsoftware" className="hover:text-white transition-colors">FastSoftware</Link></li>
              <li><Link to="/projects/alb-parking" className="hover:text-white transition-colors">ALB Parking</Link></li>
              <li><Link to="/projects/alb-ev-guardian" className="hover:text-white transition-colors">ALB EV Guardian</Link></li>
              <li><Link to="/projects/albedo-nodes" className="hover:text-white transition-colors">Albedo Nodes</Link></li>
              <li><Link to="/projects/ardyn-fitness" className="hover:text-white transition-colors">Ardyn Fitness</Link></li>
              <li><Link to="/projects/germet" className="hover:text-white transition-colors">Germet</Link></li>
              <li><Link to="/foreman" className="hover:text-white transition-colors">Foreman</Link></li>
              <li><Link to="/projects/aperta" className="hover:text-white transition-colors">Aperta</Link></li>
              <li><Link to="/projects/alphaclaim" className="hover:text-white transition-colors">Alphaclaim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-zinc-300">{t[9]}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">{t[10]}</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">{t[11]}</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">{t[12]}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-zinc-300">{t[13]}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href={contactHref} className="hover:text-white transition-colors">alex@albedo-industries.com</a></li>
              <li className="text-xs leading-relaxed text-zinc-500">{t[14]}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; {currentYear} ALBEDO Industries. {t[15]}</p>
          <div className="flex items-center gap-6">
            <a href={contactHref} className="hover:text-zinc-300 transition-colors">
              alex@albedo-industries.com
            </a>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-zinc-600">{t[16]}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
