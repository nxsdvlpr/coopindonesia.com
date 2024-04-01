import InternshipTraining from '@/features/program/internship/training'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function TrainingPage() {
  return <InternshipTraining />
}
