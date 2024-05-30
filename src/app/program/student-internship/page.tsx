import StudentInternship from '@/features/program/student-internship/student-internship'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Internship / Program / LPK COOP Indonesia',
  description: 'Student Internship / Program / LPK COOP Indonesia',
}

export default function StudentInternshipPage() {
  return <StudentInternship />
}
