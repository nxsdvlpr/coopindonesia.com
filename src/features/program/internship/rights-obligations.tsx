import { internshipRightsObligationsDataStatic } from '@/app/[locale]/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function InternshipRightsObligations() {
  const t = useTranslations()
  const {
    info,
    title,
    image,
    titleRights,
    contentRights,
    titleObligations,
    contentObligations,
  } = internshipRightsObligationsDataStatic

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('internshipRightsObligation.info')}
          title={t('internshipRightsObligation.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="2xl">
          <div className="mx-auto shrink-0 lg:w-[28.75rem]">
            <ImageNui
              src={t('internshipRightsObligation.image.src')}
              alt={t('internshipRightsObligation.image.alt')}
            />
          </div>
          <Flexbox flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {t('internshipRightsObligation.titleRights')}
            </Typo>
            <Markdown size="lg">
              {t('internshipRightsObligation.contentRights')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {t('internshipRightsObligation.titleObligations')}
            </Typo>
            <Markdown size="lg">
              {t('internshipRightsObligation.contentObligations')}
            </Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
