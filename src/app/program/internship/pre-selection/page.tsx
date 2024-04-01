import InternshipPreSelection from '@/features/program/internship/pre-selection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function PreSelectionPage() {
  return <InternshipPreSelection />
}
