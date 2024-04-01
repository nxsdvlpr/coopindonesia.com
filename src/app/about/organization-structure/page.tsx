import OrganizationStructure from '@/features/about/organization-structure'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Organization Structure',
  description: 'LPK Coop Indonesia - Organization Structure',
}

export default function OrganizationStructurePage() {
  return <OrganizationStructure />
}
