import InternshipProgramFlow from '@/features/program/internship/program-flow'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function ProgramFlowPage() {
  return <InternshipProgramFlow />
}
