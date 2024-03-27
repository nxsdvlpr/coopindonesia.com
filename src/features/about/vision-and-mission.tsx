import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import { AskedQuestion, Banner, FeaturedPrograms } from '../shared'

export default function VisionMission() {
  const visionAndMission = {
    title: 'Vision & Mission',
    vision: {
      title: 'Vision',
      description:
        'Tersedianya sumber daya manusia yang profesional dan handal guna mengembangkan sinergi kebersamaan sosial atas dasar kesetaraan dan keadilan bagi peningkatan kesejahteraan rakyat, daya saing dan kemajuan bangsa.',
      image: {
        src: '/about/vision-and-mission-image-1.svg',
        alt: '/about/vision-and-mission-image-1-coop-indonesia',
      },
    },
    mission: {
      title: 'Mission',
      description:
        'Tersedianya sumber daya manusia yang profesional dan handal guna mengembangkan sinergi kebersamaan sosial atas dasar kesetaraan dan keadilan bagi peningkatan kesejahteraan rakyat, daya saing dan kemajuan bangsa.',
    },
  }

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="ABOUT US"
          title={visionAndMission.title}
        />
      </Section>
      <Section maxWidth="content">
        <div className="flex flex-col gap-8 lg:flex-row">
          <Flexbox align="normal" flow="col" gap="xs">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {visionAndMission.vision.title}
            </Typo>
            <Markdown size="lg">{visionAndMission.vision.description}</Markdown>
          </Flexbox>
          <div className="mx-auto max-w-[18.75rem] shrink-0">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src={visionAndMission.vision.image.src}
              alt={visionAndMission.vision.image.alt}
            />
          </div>
        </div>
        <Flexbox align="normal" flow="col" gap="xs">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {visionAndMission.mission.title}
          </Typo>
          <Markdown size="lg">{visionAndMission.mission.description}</Markdown>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
