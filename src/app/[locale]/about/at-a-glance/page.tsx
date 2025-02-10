import AtaGlance from '@/features/about/at-a-glance'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK COOP Indonesia - About',
  description: 'LPK COOP Indonesia - About',
}

export default function AtaGlancePage() {
  return <AtaGlance />
}
