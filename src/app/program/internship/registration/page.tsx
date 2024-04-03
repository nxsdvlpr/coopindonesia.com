import InternshipRegistration from '@/features/program/internship/registration'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration / Internship / Program / LPK Coop Indonesia',
  description: 'Registration / Internship / Program / LPK Coop Indonesia',
}

export default function InternshipRegistrationPage() {
  return <InternshipRegistration />
}
