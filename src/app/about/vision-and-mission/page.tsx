import VisionMission from '@/features/about/vision-and-mission'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK COOP Indonesia - Vision and Mission',
  description: 'LPK COOP Indonesia - Vision and Mission',
}

export default function VisionMissionPage() {
  return <VisionMission />
}
