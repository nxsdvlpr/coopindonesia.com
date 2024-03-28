import InternshipTermsConditions from '@/features/program/internship/terms-conditions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function TermsConditionPage() {
  return <InternshipTermsConditions />
}
