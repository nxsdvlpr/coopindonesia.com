import OrganizationStructure from '@/features/about/organization-structure'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK COOP Indonesia - Organization Structure',
  description: 'LPK COOP Indonesia - Organization Structure',
}

export default function OrganizationStructurePage() {
  return <OrganizationStructure />
}
