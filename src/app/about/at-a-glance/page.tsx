import AtaGlance from '@/features/about/at-a-glance'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - About',
  description: 'LPK Coop Indonesia - About',
}

export default function AtaGlancePage() {
  return <AtaGlance />
}
