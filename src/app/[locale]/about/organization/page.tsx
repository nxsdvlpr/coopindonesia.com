import Organization from '@/features/about/organization'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK COOP Indonesia - Organization',
  description: 'LPK COOP Indonesia - Organization',
}

export default function OrganizationPage() {
  return <Organization />
}
