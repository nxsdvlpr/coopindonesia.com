import Vlog from '@/features/publication/vlog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vlog / Publication / LPK Coop Indonesia',
  description: 'Vlog / Publication / LPK Coop Indonesia',
}

export default function VlogPage() {
  return <Vlog />
}
