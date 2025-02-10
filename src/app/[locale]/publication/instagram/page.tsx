import Instagram from '@/features/publication/instagram'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Instagram / Publication / LPK COOP Indonesia',
  description: 'Instagram / Publication / LPK COOP Indonesia',
}

export default function InstagramPage() {
  return (
    <Suspense>
      <Instagram />
    </Suspense>
  )
}
