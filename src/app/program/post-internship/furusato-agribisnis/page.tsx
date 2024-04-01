import PostInternshipFurusatoAgribisnis from '@/features/program/post-internship/furusato-agribisnis'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program Usaha Mandiri',
  description: 'LPK Coop Indonesia - Program Usaha Mandiri',
}

export default function FurusatoAgribisnisPage() {
  return <PostInternshipFurusatoAgribisnis />
}
