import { internshipPlacementProgressDataStatic } from '@/app/[locale]/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function InternshipPlacementProgress() {
  const t = useTranslations()
  const { info, title, image } = internshipPlacementProgressDataStatic

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('internshipPlacementProgress.info')}
          title={t('internshipPlacementProgress.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {t('internshipPlacementProgress.title')}
          </Typo>
          <ImageNui
            src={t('internshipPlacementProgress.image.src')}
            alt={t('internshipPlacementProgress.image.alt')}
          />
        </Flexbox>
      </Section>
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
