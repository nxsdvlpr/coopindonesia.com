import { homeDataStatic } from '@/app/[locale]/api/home'
import { ImageNui, Section, Typo } from '@/nui'
import { homeSponsorStyle } from './sponsor.style'
import { useTranslations } from 'next-intl'

export function HomeSponsor() {
  const t = useTranslations()
  const { wrapper, main } = homeSponsorStyle()

  const { title, assets } = homeDataStatic.sponsor

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
