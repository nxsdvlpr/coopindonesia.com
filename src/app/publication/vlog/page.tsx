import Vlog from '@/features/publication/vlog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Vlog',
  description: 'LPK Coop Indonesia - Vlog',
}

export default function VlogPage() {
  return <Vlog />
}
