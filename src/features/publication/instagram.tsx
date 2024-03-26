import { Section, SectionTitle } from '@/nui'
import Image from 'next/image'

export default function Instagram() {
  const instagramImages = [
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
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PUBLICATION"
          title="From Our Social Media Account"
        />
      </Section>
      <Section>
        <div className="grid grid-cols-4 gap-8">
          {instagramImages.map((item, index) => (
            <div key={index} className="h-[16.5rem]">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full rounded-lg object-cover"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
