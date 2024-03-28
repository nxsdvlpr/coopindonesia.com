import NihonggoAnabuki from '@/features/program/nihonggo/anabuki'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program Sekolah Bahasa',
  description: 'LPK Coop Indonesia - Program Sekolah Bahasa',
}

export default function AnabukiPage() {
  return <NihonggoAnabuki />
}
