import { homeDataStatic } from '@/app/api/home'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import { homePublicationStyle } from './publication.style'

export default function HomePublication() {
  const {
    imageBox,
    main,
    boxInstagram,
    boxInstagramImage,
    boxYoutube,
    boxYoutubeImage,
  } = homePublicationStyle()

  const { title, subtitle, image, instagram, youtube } =
    homeDataStatic.publication

  return (
    <Section>
      <Flexbox flow="col" gap="2xl">
        <SectionTitle title={title}>{subtitle}</SectionTitle>
        <Flexbox align="normal" flow="col" gap="2xl">
          <div className={imageBox()}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-full w-full"
              src={image.src}
              alt={image.alt}
            />
          </div>
          <div className={main()}>
            <Flexbox align="start" flow="col" gap="xs">
              <Typo size="xl" color="gray-900" fontWeight="bold">
                {instagram.title}
              </Typo>
              <div className={boxInstagram()}>
                {instagram.assets.map((asset, index) => (
                  <div key={index} className={boxInstagramImage()}>
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
            </Flexbox>
            <Flexbox align="start" flow="col" gap="xs">
              <Typo size="xl" color="gray-900" fontWeight="bold">
                {youtube.title}
              </Typo>
              <div className={boxYoutube()}>
                {youtube.assets.map((asset, index) => (
                  <div key={index} className={boxYoutubeImage()}>
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
            </Flexbox>
          </div>
        </Flexbox>
      </Flexbox>
    </Section>
  )
}
