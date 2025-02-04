import InternshipRegistration from '@/features/program/internship/registration'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration / Internship / Program / LPK COOP Indonesia',
  description: 'Registration / Internship / Program / LPK COOP Indonesia',
}

export default function InternshipRegistrationPage() {
  return <InternshipRegistration />
}
