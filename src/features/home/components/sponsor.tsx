import { ImageNui, Section, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
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
            <Link
              className="h-12 "
              key={index}
              href={asset.href}
              target="_blank"
            >
              <ImageNui
                className="h-full w-full object-cover grayscale hover:grayscale-0"
                src={asset.src}
                alt={asset.alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
