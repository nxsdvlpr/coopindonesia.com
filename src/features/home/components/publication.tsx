import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import { homePublicationStyle } from './publication.style'

export default function HomePublication() {
  const homePublication = {
    title: 'Publication',
    subtitle: 'Updates from our social media platform',
    image: {
      src: '/from-our-youtube-channel/from-our-youtube-channel-image-1.png',
      alt: 'from-our-youtube-channel-image-1-coop-indonesia',
    },
    instagramAssets: [
      {
        src: '/from-our-instagram/from-our-instagram-image-1.png',
        alt: 'from-our-instagram-image-1-coop-indonesia',
      },
      {
        src: '/from-our-instagram/from-our-instagram-image-2.png',
        alt: 'from-our-instagram-image-2-coop-indonesia',
      },
      {
        src: '/from-our-instagram/from-our-instagram-image-3.png',
        alt: 'from-our-instagram-image-3-coop-indonesia',
      },
      {
        src: '/from-our-instagram/from-our-instagram-image-4.png',
        alt: 'from-our-instagram-image-4-coop-indonesia',
      },
    ],
    youtubeAssets: [
      {
        src: '/from-our-youtube-channel/from-our-youtube-channel-image-1.png',
        alt: 'from-our-youtube-channel-image-1-coop-indonesia',
      },
      {
        src: '/from-our-youtube-channel/from-our-youtube-channel-image-2.png',
        alt: 'from-our-youtube-channel-image-2-coop-indonesia',
      },
      {
        src: '/from-our-youtube-channel/from-our-youtube-channel-image-3.png',
        alt: 'from-our-youtube-channel-image-3-coop-indonesia',
      },
      {
        src: '/from-our-youtube-channel/from-our-youtube-channel-image-4.png',
        alt: 'from-our-youtube-channel-image-4-coop-indonesia',
      },
    ],
  }

  const {
    imageBox,
    main,
    boxInstagram,
    boxInstagramImage,
    boxYoutube,
    boxYoutubeImage,
  } = homePublicationStyle()

  const { title, subtitle, image, instagramAssets, youtubeAssets } =
    homePublication

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
                From Our Instagram
              </Typo>
              <div className={boxInstagram()}>
                {instagramAssets.map((instagramAsset, index) => (
                  <div key={index} className={boxInstagramImage()}>
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-full w-full"
                      src={instagramAsset.src}
                      alt={instagramAsset.alt}
                    />
                  </div>
                ))}
              </div>
            </Flexbox>
            <Flexbox align="start" flow="col" gap="xs">
              <Typo size="xl" color="gray-900" fontWeight="bold">
                From Our YouTube Channel
              </Typo>
              <div className={boxYoutube()}>
                {youtubeAssets.map((youtubeAsset, index) => (
                  <div key={index} className={boxYoutubeImage()}>
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-full w-full"
                      src={youtubeAsset.src}
                      alt={youtubeAsset.alt}
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
