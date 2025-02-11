import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export default function Term() {
  const t = useTranslations()
  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" title={t('sharedContent.term.title')} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" align="normal" gap="2xl">
          <ImageNui
            src={t('sharedContent.term.image.src')}
            alt={t('sharedContent.term.image.alt')}
          />
          <Markdown size="lg">{t('sharedContent.term.body')}</Markdown>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.term.titleInfo')}
            </Typo>
            <Markdown size="lg">{t('sharedContent.term.contentInfo')}</Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.term.titleCookie')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.term.contentCookie')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.term.titleUsage')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.term.contentUsage')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.term.titlePrivacy')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.term.contentPrivacy')}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="start">
            <Typo size="2xl" fontWeight="bold">
              {t('sharedContent.term.titleUpdate')}
            </Typo>
            <Markdown size="lg">
              {t('sharedContent.term.contentUpdate')}
            </Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
    </>
  )
}
