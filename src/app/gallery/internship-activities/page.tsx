import InternshipActivities from '@/features/gallery/internship-activities'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Internship Activities / Gallery / LPK Coop Indonesia',
  description: 'Internship Activities / Gallery / LPK Coop Indonesia',
}

export default function InternshipActivitiesPage() {
  return <InternshipActivities />
}
