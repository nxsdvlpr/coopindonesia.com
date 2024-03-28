import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipPlacementProgress() {
  const internshipPlacementProgress = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Progress Penempatan',
    image: {
      src: '/program/placement-progress-image-1.svg',
      alt: 'placement-progress-image-1-coop-indonesia',
    },
  }

  const { info, title, image } = internshipPlacementProgress

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {title}
          </Typo>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full"
            src={image.src}
            alt={image.alt}
          />
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
