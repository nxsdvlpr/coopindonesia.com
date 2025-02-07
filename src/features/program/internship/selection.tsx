import { internshipSelectionDataStatic } from '@/app/[locale]/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import { useTranslations } from 'next-intl'

export default function InternshipSelection() {
  const t = useTranslations()
  const { info, title, images, content } = internshipSelectionDataStatic

  const items = images.map((image, i) => (
    <ImageNui key={i} src={image.src} alt={image.alt} />
  ))

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('internshipSelection.info')}
          title={t('internshipSelection.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="none" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {t('internshipSelection.content.title')}
          </Typo>
          <Markdown size="lg">{t('internshipSelection.content.body')}</Markdown>
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
