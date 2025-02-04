import { Flexbox, ImageNui, Markdown, Section, Typo } from '@/nui'
import { useTranslations } from 'next-intl'

export function HomeHero() {
  const t = useTranslations()

  return (
    <Section>
      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        <Flexbox flow="col" gap="xl">
          <Flexbox align="start" flow="col" gap="xs">
            <Typo size="md" fontWeight="extrabold" color="primary-500">
              {t('homePage.hero.info')}
            </Typo>
            <Typo size="6xl" fontWeight="extrabold" color="gray-900">
              {t('homePage.hero.title')}
            </Typo>
          </Flexbox>
          <Markdown size="lg">{t('homePage.hero.desc')}</Markdown>
        </Flexbox>
        <div className="w-full shrink-0 lg:w-[33.6875rem]">
          <ImageNui
            src={t('homePage.hero.image.src')}
            alt={t('homePage.hero.image.alt')}
          />
        </div>
      </div>
    </Section>
  )
}
