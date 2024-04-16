import { ImageNui, Section, SectionTitle } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import ExploreMoreGalleries from './explore-more-galleries'

export default function InternshipActivities() {
  const images = [
    {
      src: '/training/training-image-3.png',
      alt: 'training-image-3-coop-indonesia',
    },
    {
      src: '/training/training-image-1.png',
      alt: 'training-image-1-coop-indonesia',
    },
    {
      src: '/training/training-image-2.png',
      alt: 'training-image-2-coop-indonesia',
    },
    {
      src: '/training/training-image-4.png',
      alt: 'training-image-4-coop-indonesia',
    },
    {
      src: '/training/training-image-5.png',
      alt: 'training-image-5-coop-indonesia',
    },
  ]

  const items = images.map((image, i) => (
    <ImageNui key={i} src={image.src} alt={image.alt} />
  ))

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="GALLERY" title="Kegiatan Magang" />
      </Section>
      <Section maxWidth="sm">
        <Carousel items={items} />
      </Section>
      <ExploreMoreGalleries hideInternshipActivities />
    </>
  )
}
