import InternshipEducationalMaterial from '@/features/program/internship/educational-material'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function EducationalMaterialPage() {
  return <InternshipEducationalMaterial />
}
