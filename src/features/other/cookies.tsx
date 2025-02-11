import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function Cookies() {
  const t = useTranslations()
  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          title={t('sharedContent.cookies.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" align="normal" gap="2xl">
          <ImageNui
            src={t('sharedContent.cookies.image.src')}
            alt={t('sharedContent.cookies.image.alt')}
          />
          <Markdown size="lg">{t('sharedContent.cookies.body')}</Markdown>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.cookies.titleCookie')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.cookies.contentCookie')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.cookies.titleTypesOfCookies')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.cookies.contentTypesOfCookies')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.cookies.titleManagingCookies')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.cookies.contentManagingCookies')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.cookies.titleQuestion')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.cookies.contentQuestion')}
            </Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
    </>
  )
}
