import Collaboration from '@/features/gallery/collaboration'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Gallery',
  description: 'LPK Coop Indonesia - Gallery',
}

export default function CollaborationPage() {
  return <Collaboration />
}
