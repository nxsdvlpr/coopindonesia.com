import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Markdown, Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'

export default function StudentInternship() {
  const t = useTranslations()

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('studentInternship.info')}
          title={t('studentInternship.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Markdown size="lg">{t('studentInternship.contents.body')}</Markdown>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
