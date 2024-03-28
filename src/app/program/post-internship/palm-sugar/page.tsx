import PostInternshipPalmSugar from '@/features/program/post-internship/palm-sugar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program Usaha Mandiri',
  description: 'LPK Coop Indonesia - Program Usaha Mandiri',
}

export default function PalmSugarPage() {
  return <PostInternshipPalmSugar />
}
