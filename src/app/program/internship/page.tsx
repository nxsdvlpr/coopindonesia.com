import Internship from '@/features/program/internship/internship'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Internship / Program / LPK COOP Indonesia',
  description: 'Internship / Program / LPK COOP Indonesia',
}

export default function InternshipPage() {
  return <Internship />
}
