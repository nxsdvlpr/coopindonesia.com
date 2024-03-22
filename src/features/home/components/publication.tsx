import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function HomePublication() {
  const fromOurInstagramImages = [
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
  ]

  const fromOurYoutubeChannelImages = [
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
  ]

  return (
    <Section>
      <Flexbox flow="col" gap="2xl">
        <SectionTitle title="Publication">
          Updates from our social media platform
        </SectionTitle>
        <Flexbox align="normal" flow="col" gap="2xl">
          <div className="overflow-hidden rounded-lg">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-full w-full"
              src="/from-our-youtube-channel/from-our-youtube-channel-image-1.png"
              alt="from-our-youtube-channel-image-1-coop-indonesia"
            />
          </div>
          <Flexbox justify="between">
            <Flexbox align="start" flow="col" gap="xs">
              <Typo size="xl" color="gray-900" fontWeight="bold">
                From Our Instagram
              </Typo>
              <div className="grid grid-cols-2 gap-6">
                {fromOurInstagramImages.map((fromOurInstagramImage) => (
                  <div
                    key={fromOurInstagramImage.alt}
                    className="h-[11.875rem] w-[11.875rem] overflow-hidden rounded-lg"
                  >
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-full w-full"
                      src={fromOurInstagramImage.src}
                      alt={fromOurInstagramImage.alt}
                    />
                  </div>
                ))}
              </div>
            </Flexbox>
            <Flexbox align="start" flow="col" gap="xs">
              <Typo size="xl" color="gray-900" fontWeight="bold">
                From Our YouTube Channel
              </Typo>
              <div className="grid grid-cols-2 gap-6">
                {fromOurYoutubeChannelImages.map(
                  (fromOurYoutubeChannelImage) => (
                    <div
                      key={fromOurYoutubeChannelImage.alt}
                      className="h-[11.875rem] w-[21.25rem] overflow-hidden rounded-lg"
                    >
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-full w-full"
                        src={fromOurYoutubeChannelImage.src}
                        alt={fromOurYoutubeChannelImage.alt}
                      />
                    </div>
                  )
                )}
              </div>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Section>
  )
}
