import InternshipRightsObligations from '@/features/program/internship/rights-obligations'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function RightsObligationsPage() {
  return <InternshipRightsObligations />
}
