import { ImageNui, Section, SectionTitle } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import { useTranslations } from 'next-intl'
import ExploreMoreGalleries from './explore-more-galleries'

export default function TrainingCenter() {
  const t = useTranslations()
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
        <SectionTitle
          sizeTitle="6xl"
          info={t('gallery.trainingCenter.info')}
          title={t('gallery.trainingCenter.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Carousel items={items} />
      </Section>
      <ExploreMoreGalleries hideTrainingCenter />
    </>
  )
}
