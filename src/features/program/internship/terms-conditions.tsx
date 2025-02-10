import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function InternshipTermsConditions() {
  const t = useTranslations()

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('internshipTermsConditions.info')}
          title={t('internshipTermsConditions.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="2xl">
          <div className="mx-auto shrink-0 lg:w-[28.75rem]">
            <ImageNui
              src="/program/terms-conditions-image-1.svg"
              alt="terms-conditions-image-1-coop-indonesia"
            />
          </div>
          <Flexbox flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {t('internshipTermsConditions.termsConditions.title')}
            </Typo>
            <Markdown size="lg">
              {t('internshipTermsConditions.termsConditions.body')}
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
