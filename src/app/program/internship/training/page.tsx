import InternshipTraining from '@/features/program/internship/training'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Training / Internship / Program / LPK Coop Indonesia',
  description: 'Training / Internship / Program / LPK Coop Indonesia',
}

export default function TrainingPage() {
  return <InternshipTraining />
}
