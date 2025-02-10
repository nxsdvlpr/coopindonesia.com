import NihonggoAnabuki from '@/features/program/nihonggo/anabuki'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anabuki / Nihonggo  / Program / LPK COOP Indonesia',
  description: 'Anabuki / Nihonggo / Program / LPK COOP Indonesia',
}

export default function AnabukiPage() {
  return <NihonggoAnabuki />
}
