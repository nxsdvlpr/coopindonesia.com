import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function Nihonggo() {
  const t = useTranslations()

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('nihonggo.info')}
          title={t('nihonggo.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox align="normal" flow="col" gap="xl">
          <div className="mx-auto max-w-[28.75rem]">
            <ImageNui
              src={t('nihonggo.image.src')}
              alt={t('nihonggo.image.alt')}
            />
          </div>

          {t.raw('nihonggo.contents').map((content: any, index: number) => (
            <Flexbox key={index} flow="col" gap="none" align="normal">
              {content.title && (
                <Typo size="2xl" fontWeight="bold" color="gray-900">
                  {content.title}
                </Typo>
              )}
              <Markdown size="lg">{content.body}</Markdown>
            </Flexbox>
          ))}
        </Flexbox>
      </Section>
      <Menu showMenuNihonggo />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
