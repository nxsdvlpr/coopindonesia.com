import InternshipTermsConditions from '@/features/program/internship/terms-conditions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms Conditions / Internship / Program / LPK COOP Indonesia',
  description: 'Terms Conditions / Internship / Program / LPK COOP Indonesia',
}

export default function TermsConditionPage() {
  return <InternshipTermsConditions />
}
