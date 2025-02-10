import InternshipPlacementProgress from '@/features/program/internship/placement-progress'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Placement Progress / Internship / Program / LPK COOP Indonesia',
  description: 'Placement Progress / Internship / Program / LPK COOP Indonesia',
}

export default function PlacementProgressPage() {
  return <InternshipPlacementProgress />
}
