import { homeDataStatic } from '@/app/api/home'
import { Section, Typo } from '@/nui'
import Image from 'next/image'
import { homeSponsorStyle } from './sponsor.style'

export function HomeSponsor() {
  const { wrapper, main } = homeSponsorStyle()

  const { title, assets } = homeDataStatic.sponsor

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
