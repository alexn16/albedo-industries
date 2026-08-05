import AtlasCandidatePage from '../components/AtlasCandidatePage'
import { atlasCandidatePublications } from '../data/candidatePublications'
import { candidateByRoute } from '../data/infrastructureCandidates'

const candidate = candidateByRoute.get('/infrastructure/spain/as-pontes')!
const publication = atlasCandidatePublications[candidate.id]

export default function AsPontesResearch() {
  return <AtlasCandidatePage candidate={candidate} publication={publication} />
}
