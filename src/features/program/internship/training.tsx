import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import { useTranslations } from 'next-intl'

export default function InternshipTraining() {
  const t = useTranslations()

  const items = t
    .raw('internshipTraining.images')
    .map((image: any, i: number) => (
      <ImageNui key={i} src={image.src} alt={image.alt} />
    ))

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('internshipTraining.info')}
          title={t('internshipTraining.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {t('internshipTraining.content.title')}
          </Typo>
          <Markdown size="lg">{t('internshipTraining.content.body')}</Markdown>
        </Flexbox>
        <div className="h-6" />
        <Carousel items={items} />
      </Section>
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
