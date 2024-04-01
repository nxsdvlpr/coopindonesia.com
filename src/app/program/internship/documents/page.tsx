import InternshipDocuments from '@/features/program/internship/documents'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function DocumentPage() {
  return <InternshipDocuments />
}
