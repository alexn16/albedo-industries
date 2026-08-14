import { Navigate, useParams } from 'react-router-dom'
import InfrastructureEurope from './InfrastructureEurope'

const countries: Record<string,string>={spain:'Spain',portugal:'Portugal',germany:'Germany',france:'France',sweden:'Sweden',finland:'Finland',norway:'Norway',poland:'Poland',uruguay:'Uruguay'}
export default function InfrastructureCountry(){const {country}=useParams();if(!country||!countries[country])return <Navigate to="/infrastructure/europe" replace/>;return <InfrastructureEurope key={country} country={countries[country]}/>}
