import { homeDataStatic } from '@/app/api/home'
import { ImageNui, Section, Typo } from '@/nui'
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
