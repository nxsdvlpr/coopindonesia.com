import { ImageNui, Section, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import { homeSponsorStyle } from './sponsor.style'

export function HomeSponsor() {
  const t = useTranslations()
  const { wrapper, main } = homeSponsorStyle()

  return (
    <Section>
      <div className={wrapper()}>
        <Typo size="lg">{t('homePage.sponsor.title')}</Typo>
        <div className={main()}>
          {t.raw('homePage.sponsor.assets').map((asset: any, index: number) => (
            <div className="h-12 max-w-[7.5rem]" key={index}>
              <ImageNui
                className="h-full w-full grayscale hover:grayscale-0"
                src={asset.src}
                alt={asset.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
