import InternshipActivities from '@/features/gallery/internship-activities'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Internship Activities / Gallery / LPK COOP Indonesia',
  description: 'Internship Activities / Gallery / LPK COOP Indonesia',
}

export default function InternshipActivitiesPage() {
  return <InternshipActivities />
}
