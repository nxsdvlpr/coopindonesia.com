import { ImageNui, Section, SectionTitle } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import { useTranslations } from 'next-intl'
import ExploreMoreGalleries from './explore-more-galleries'

export default function InternshipActivities() {
  const t = useTranslations()
  let images = []
  const totalImages = 4

  for (let i = 1; i <= totalImages; i++) {
    images.push({
      src: `/internship-activities/internship-activities-${i}.jpg`,
      alt: `internship-activities-${i}-coop-indonesia`,
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
          info={t('gallery.internshipActivities.info')}
          title={t('gallery.internshipActivities.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Carousel items={items} />
      </Section>
      <ExploreMoreGalleries hideInternshipActivities />
    </>
  )
}
