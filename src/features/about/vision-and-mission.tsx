import { aboutVisionAndMissionDataStatic } from '@/app/api/about'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import { AskedQuestion, Banner, Testimonial } from '../shared'

export default function VisionMission() {
  const { info, title, vision, mission } = aboutVisionAndMissionDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <div className="flex flex-col gap-8 lg:flex-row">
          <Flexbox align="normal" flow="col" gap="xs">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {vision.title}
            </Typo>
            <Markdown size="lg">{vision.description}</Markdown>
          </Flexbox>
          <div className="mx-auto max-w-[18.75rem] shrink-0">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src={vision.image.src}
              alt={vision.image.alt}
            />
          </div>
        </div>
        <Flexbox align="normal" flow="col" gap="xs">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {mission.title}
          </Typo>
          <Markdown size="lg">{mission.description}</Markdown>
        </Flexbox>
      </Section>
      <Testimonial />
      <AskedQuestion />
      <Banner />
    </>
  )
}
