import TrainingCenter from '@/features/gallery/training-center'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pusat Pelatihan / Gallery / LPK COOP Indonesia',
  description: 'Pusat Pelatihan / Gallery / LPK COOP Indonesia',
}

export default function TrainingCenterPage() {
  return <TrainingCenter />
}
