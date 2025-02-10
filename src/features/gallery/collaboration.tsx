import { ImageNui, Section, SectionTitle } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import { useTranslations } from 'next-intl'
import ExploreMoreGalleries from './explore-more-galleries'

export default function Collaboration() {
  const t = useTranslations()
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
        <SectionTitle
          sizeTitle="6xl"
          info={t('gallery.collaboration.info')}
          title={t('gallery.collaboration.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Carousel items={items} />
      </Section>
      <ExploreMoreGalleries hideCollaboration />
    </>
  )
}
