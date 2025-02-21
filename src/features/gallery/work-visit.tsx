import { ImageNui, Section, SectionTitle } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import { useTranslations } from 'next-intl'
import ExploreMoreGalleries from './explore-more-galleries'

export default function WorkVisit() {
  const t = useTranslations()
  let images = []
  const totalImages = 8

  for (let i = 1; i <= totalImages; i++) {
    images.push({
      src: `/work-visit/work-visit-${i}.jpg`,
      alt: `work-visit-image-${i}-coop-indonesia`,
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
          info={t('gallery.workVisit.info')}
          title={t('gallery.workVisit.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Carousel items={items} />
      </Section>
      <ExploreMoreGalleries hideWorkVisit />
    </>
  )
}
