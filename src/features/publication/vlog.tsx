import { Section, SectionTitle } from '@/nui'
import { Suspense } from 'react'
import VideoVlog from './video'

export default function Vlog() {
  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="PUBLICATION" title="Vlog" />
      </Section>
      <Suspense>
        <VideoVlog />
      </Suspense>
    </>
  )
}
