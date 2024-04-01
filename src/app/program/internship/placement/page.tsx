import InternshipPlacement from '@/features/program/internship/placement'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function PlacementPage() {
  return <InternshipPlacement />
}
