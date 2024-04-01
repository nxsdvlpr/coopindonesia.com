import Internship from '@/features/program/internship/internship'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function InternshipPage() {
  return <Internship />
}
