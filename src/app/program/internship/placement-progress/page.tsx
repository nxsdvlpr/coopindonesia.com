import InternshipPlacementProgress from '@/features/program/internship/placement-progress'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function PlacementProgressPage() {
  return <InternshipPlacementProgress />
}
