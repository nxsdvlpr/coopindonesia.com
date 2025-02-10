import Nihonggo from '@/features/program/nihonggo/nihonggo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nihonggo / Program / LPK COOP Indonesia',
  description: 'Nihonggo / Program / LPK COOP Indonesia',
}

export default function NihonggoPage() {
  return <Nihonggo />
}
