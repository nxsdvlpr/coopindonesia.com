import NihonggoIsb from '@/features/program/nihonggo/isb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program Sekolah Bahasa',
  description: 'LPK Coop Indonesia - Program Sekolah Bahasa',
}

export default function IsbPage() {
  return <NihonggoIsb />
}
