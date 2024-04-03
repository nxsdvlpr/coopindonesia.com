import InternshipPlacementProgress from '@/features/program/internship/placement-progress'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Placement Progress / Internship / Program / LPK Coop Indonesia',
  description: 'Placement Progress / Internship / Program / LPK Coop Indonesia',
}

export default function PlacementProgressPage() {
  return <InternshipPlacementProgress />
}
