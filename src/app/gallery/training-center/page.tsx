import TrainingCenter from '@/features/gallery/training-center'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Training Center / Gallery / LPK Coop Indonesia',
  description: 'Training Center / Gallery / LPK Coop Indonesia',
}

export default function TrainingCenterPage() {
  return <TrainingCenter />
}
