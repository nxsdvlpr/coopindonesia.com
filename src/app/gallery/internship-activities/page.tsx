import InternshipActivities from '@/features/gallery/internship-activities'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Gallery',
  description: 'LPK Coop Indonesia - Gallery',
}

export default function InternshipActivitiesPage() {
  return <InternshipActivities />
}
