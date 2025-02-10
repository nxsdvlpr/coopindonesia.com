import PostInternship from '@/features/program/post-internship/post-internship'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post Internship / Program / LPK COOP Indonesia',
  description: 'Post Internship / Program / LPK COOP Indonesia',
}

export default function PostInternshipPage() {
  return <PostInternship />
}
