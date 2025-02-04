import Vlog from '@/features/publication/vlog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vlog / Publication / LPK COOP Indonesia',
  description: 'Vlog / Publication / LPK COOP Indonesia',
}

export default function VlogPage() {
  return <Vlog />
}
