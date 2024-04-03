import InternshipDocuments from '@/features/program/internship/documents'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documents / Internship / Program / LPK Coop Indonesia',
  description: 'Documents / Internship / Program / LPK Coop Indonesia',
}

export default function DocumentPage() {
  return <InternshipDocuments />
}
