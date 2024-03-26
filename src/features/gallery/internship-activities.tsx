import { Section, SectionTitle } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'
import ExploreMoreGalleries from './explore-more-galleries'

export default function InternshipActivities() {
  const images = [
    {
      src: '/pre-selection/pre-selection-image-1.png',
      alt: 'pre-selection-image-1-coop-indonesia',
    },
  ]

  const items = images.map((image, i) => (
    <Image
      key={i}
      width="0"
      height="0"
      sizes="100vw"
      className="h-full w-full rounded-lg object-cover"
      src={image.src}
      alt={image.alt}
    />
  ))

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="GALLERY" title="Kegiatan Magang" />
      </Section>
      <Section maxWidth="content">
        <Carousel items={items} />
      </Section>
      <ExploreMoreGalleries hideInternshipActivities />
    </>
  )
}
