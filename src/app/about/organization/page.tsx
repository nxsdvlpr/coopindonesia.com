import Organization from '@/features/about/organization'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Organization',
  description: 'LPK Coop Indonesia - Organization',
}

export default function OrganizationPage() {
  return <Organization />
}
