import { ImageNui, Section, SectionTitle } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import ExploreMoreGalleries from './explore-more-galleries'

export default function TrainingCenter() {
  let images = []
  const totalImages = 13

  for (let i = 1; i <= totalImages; i++) {
    images.push({
      src: `/training/training-image-${i}.jpg`,
      alt: `training-image-${i}-coop-indonesia`,
    })
  }

  const items = images.map((image, i) => (
    <ImageNui key={i} src={image.src} alt={image.alt} />
  ))

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="GALLERY" title="Pusdiklat Magang" />
      </Section>
      <Section maxWidth="sm">
        <Carousel items={items} />
      </Section>
      <ExploreMoreGalleries hideTrainingCenter />
    </>
  )
}
