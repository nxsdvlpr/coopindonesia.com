import { Section, Typo } from '@/nui'
import Image from 'next/image'
import { homeSponsorStyle } from './sponsor.style'

export function HomeSponsor() {
  const homeSponsor = {
    title: 'Kami berkolaborasi untuk mencapai dampak terbesar bagi komunitas.',
    assets: [
      {
        src: '/sponsor/fursato-logo.png',
        alt: 'fursato-logo-coop-indonesia',
      },
      {
        src: '/sponsor/coop-japan-logo.png',
        alt: 'coop-japan-logo-coop-indonesia',
      },
      {
        src: '/sponsor/other-sponsor-logo.png',
        alt: 'other-sponsor-logo-coop-indonesia',
      },
      {
        src: '/sponsor/igs-logo.png',
        alt: 'igs-logo-coop-indonesia',
      },
    ],
  }

  const { wrapper, main } = homeSponsorStyle()

  const { title, assets } = homeSponsor

  return (
    <Section>
      <div className={wrapper()}>
        <Typo size="lg">{title}</Typo>
        <div className={main()}>
          {assets.map((asset, index) => (
            <div className="h-16" key={index}>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full"
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
