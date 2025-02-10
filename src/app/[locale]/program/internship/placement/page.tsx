import InternshipPlacement from '@/features/program/internship/placement'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Placement / Internship / Program / LPK COOP Indonesia',
  description: 'Placement / Internship / Program / LPK COOP Indonesia',
}

export default function PlacementPage() {
  return <InternshipPlacement />
}
