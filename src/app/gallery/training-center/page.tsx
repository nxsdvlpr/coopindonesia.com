import TrainingCenter from '@/features/gallery/training-center'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Gallery',
  description: 'LPK Coop Indonesia - Gallery',
}

export default function TrainingCenterPage() {
  return <TrainingCenter />
}
