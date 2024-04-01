import InternshipRegistration from '@/features/program/internship/registration'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function InternshipRegistrationPage() {
  return <InternshipRegistration />
}
