import { youtubeData } from '@/app/api/publication'
import { Section, SectionTitle } from '@/nui'
import VideoVlog from './video'

export default async function Vlog() {
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
