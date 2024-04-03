import InternshipTermsConditions from '@/features/program/internship/terms-conditions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms Conditions / Internship / Program / LPK Coop Indonesia',
  description: 'Terms Conditions / Internship / Program / LPK Coop Indonesia',
}

export default function TermsConditionPage() {
  return <InternshipTermsConditions />
}
