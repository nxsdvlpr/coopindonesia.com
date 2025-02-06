import { intershipDataStatic } from '@/app/[locale]/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { ImageNui, Markdown, Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

export default function Internship() {
  const t = useTranslations()
  const { info, title, subtitle, body, image, contents } = intershipDataStatic

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('internship.info')}
          title={t('internship.title')}
        >
          {t('internship.subtitle')}
        </SectionTitle>
      </Section>
      <Section maxWidth="sm">
        <div className="flex flex-col gap-8">
          <div className="mx-auto w-full lg:w-[30rem]">
            <ImageNui
              src={t('internship.image.src')}
              alt={t('internship.image.alt')}
            />
          </div>
          <Markdown>{t('internship.body')}</Markdown>
          {t.raw('internship.contents').map((content: any, index: number) => (
            <Fragment key={index}>
              <div className="flex flex-col gap-6 lg:flex-row">
                {content.images.map((item: any, indexImage: number) => (
                  <div
                    key={indexImage}
                    className="overflow-hidden rounded-2xl lg:w-[23.5rem]"
                  >
                    <ImageNui src={item.src} alt={item.alt} />
                  </div>
                ))}
              </div>
              <Markdown>{content.body}</Markdown>
            </Fragment>
          ))}
        </div>
      </Section>
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
