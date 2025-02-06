import { internshipEducationalMaterialDataStatic } from '@/app/[locale]/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function InternshipEducationalMaterial() {
  const t = useTranslations()
  const { info, title, image, contents } =
    internshipEducationalMaterialDataStatic

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('internshipEducationalMaterial.info')}
          title={t('internshipEducationalMaterial.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="2xl" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {t('internshipEducationalMaterial.title')}
          </Typo>
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="mx-auto h-full max-w-[17.5rem] shrink-0">
              <ImageNui
                src={t('internshipEducationalMaterial.image.src')}
                alt={t('internshipEducationalMaterial.image.alt')}
              />
            </div>
            <Flexbox flow="col" gap="lg">
              {t
                .raw('internshipEducationalMaterial.contents')
                .map((content: any, index: number) => (
                  <Flexbox key={index} flow="col" gap="xs" align="normal">
                    <Typo size="lg" fontWeight="bold">
                      {content.title}
                    </Typo>
                    <Markdown size="lg">{content.body}</Markdown>
                  </Flexbox>
                ))}
            </Flexbox>
          </div>
        </Flexbox>
      </Section>
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
