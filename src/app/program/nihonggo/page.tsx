import Nihonggo from '@/features/program/nihonggo/nihonggo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program Sekolah Bahasa',
  description: 'LPK Coop Indonesia - Program Sekolah Bahasa',
}

export default function NihonggoPage() {
  return <Nihonggo />
}
