import { internshipProgramFlowDataStatic } from '@/app/[locale]/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function InternshipProgramFlow() {
  const t = useTranslations()
  const { info, title, steps } = internshipProgramFlowDataStatic

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('internshipProgramFlow.info')}
          title={t('internshipProgramFlow.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="4xl">
          {t
            .raw('internshipProgramFlow.steps')
            .map((step: any, index: number) => (
              <Flexbox key={index} flow="col" gap="2xs" align="normal">
                {step.titleStep && (
                  <Typo size="2xl" fontWeight="bold" color="gray-900">
                    {step.titleStep}
                  </Typo>
                )}
                <Typo size="lg" fontWeight="bold" color="gray-900">
                  {step.title}
                </Typo>
                <ImageNui src={step.image.src} alt={step.image.alt} />
              </Flexbox>
            ))}
        </Flexbox>
      </Section>
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
