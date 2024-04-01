import Instagram from '@/features/publication/instagram'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Instagram',
  description: 'LPK Coop Indonesia - Instagram',
}

export default function InstagramPage() {
  return <Instagram />
}
