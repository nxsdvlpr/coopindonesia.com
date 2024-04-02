import { youtubeData } from '@/app/api/publication'
import VideoVlog from '@/features/publication/video'
import { Section, SectionTitle } from '@/nui'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Vlog',
  description: 'LPK Coop Indonesia - Vlog',
}

export default async function VlogPage() {
  const data = await youtubeData()

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="PUBLICATION" title="Vlog" />
      </Section>
      <VideoVlog data={data} />
    </>
  )
}
