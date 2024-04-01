import PostInternship from '@/features/program/post-internship/post-internship'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program Usaha Mandiri',
  description: 'LPK Coop Indonesia - Program Usaha Mandiri',
}

export default function PostInternshipPage() {
  return <PostInternship />
}
