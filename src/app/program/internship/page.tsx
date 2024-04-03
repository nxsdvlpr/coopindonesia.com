import Internship from '@/features/program/internship/internship'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Internship / Program / LPK Coop Indonesia',
  description: 'Internship / Program / LPK Coop Indonesia',
}

export default function InternshipPage() {
  return <Internship />
}
