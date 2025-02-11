import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function Privacy() {
  const t = useTranslations()
  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          title={t('sharedContent.privacy.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" align="normal" gap="2xl">
          <ImageNui
            src={t('sharedContent.privacy.image.src')}
            alt={t('sharedContent.privacy.image.alt')}
          />
          <Markdown size="lg">{t('sharedContent.privacy.body')}</Markdown>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.privacy.titleInfo')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.privacy.contentInfo')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.privacy.titleSecurity')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.privacy.contentSecurity')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.privacy.titleAccess')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.privacy.contentAccess')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.privacy.titleContact')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.privacy.contentContact')}
            </Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
    </>
  )
}
