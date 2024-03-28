import InternshipSelection from '@/features/program/internship/selection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function SelectionPage() {
  return <InternshipSelection />
}
