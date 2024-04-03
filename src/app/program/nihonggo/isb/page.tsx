import NihonggoIsb from '@/features/program/nihonggo/isb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ISB / Nihonggo / Program / LPK Coop Indonesia',
  description: 'ISB / Nihonggo / Program / LPK Coop Indonesia',
}

export default function IsbPage() {
  return <NihonggoIsb />
}
