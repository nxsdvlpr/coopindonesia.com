import WorkVisit from '@/features/gallery/work-visit'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Gallery',
  description: 'LPK Coop Indonesia - Gallery',
}

export default function WorkVisitPage() {
  return <WorkVisit />
}
