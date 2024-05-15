import { ImageNui, Section, SectionTitle } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import ExploreMoreGalleries from './explore-more-galleries'

export default function Collaboration() {
  let images = []
  const totalImages = 8

  for (let i = 1; i <= totalImages; i++) {
    images.push({
      src: `/collaboration/collaboration-${i}.jpg`,
      alt: `collaboration-image-${i}-coop-indonesia`,
    })
  }

  const items = images.map((image, i) => (
    <ImageNui key={i} src={image.src} alt={image.alt} />
  ))

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="GALLERY" title="Kerjasama" />
      </Section>
      <Section maxWidth="sm">
        <Carousel items={items} />
      </Section>
      <ExploreMoreGalleries hideCollaboration />
    </>
  )
}
