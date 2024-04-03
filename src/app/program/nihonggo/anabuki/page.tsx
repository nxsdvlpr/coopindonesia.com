import NihonggoAnabuki from '@/features/program/nihonggo/anabuki'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anabuki / Nihonggo  / Program / LPK Coop Indonesia',
  description: 'Anabuki / Nihonggo / Program / LPK Coop Indonesia',
}

export default function AnabukiPage() {
  return <NihonggoAnabuki />
}
