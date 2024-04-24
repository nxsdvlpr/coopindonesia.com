import InternshipDocuments from '@/features/program/internship/documents'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documents / Internship / Program / LPK COOP Indonesia',
  description: 'Documents / Internship / Program / LPK COOP Indonesia',
}

export default function DocumentPage() {
  return <InternshipDocuments />
}
