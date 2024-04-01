import { homeDataStatic } from '@/app/api/home'
import { instagramData, youtubeData } from '@/app/api/publication'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import { Video } from '@/nui/video'
import Image from 'next/image'
import { homePublicationStyle } from './publication.style'

export default async function HomePublication() {
  const {
    imageBox,
    main,
    boxInstagram,
    boxInstagramImage,
    boxYoutube,
    boxYoutubeImage,
  } = homePublicationStyle()

  const { title, subtitle } = homeDataStatic.publication

  const youtube = await youtubeData()

  const instagram = await instagramData()

  const videoId = youtube?.items?.[0]?.snippet?.resourceId?.videoId ?? ''

  return (
    <Section>
      <Flexbox flow="col" gap="2xl">
        <SectionTitle title={title}>{subtitle}</SectionTitle>
        <Flexbox align="normal" flow="col" gap="2xl">
          <div className={imageBox()}>
            <Video youtubeId={videoId} />
          </div>
          <div className={main()}>
            <Flexbox align="start" flow="col" gap="xs">
              <Typo size="xl" color="gray-900" fontWeight="bold">
                From Our Instagram
              </Typo>
              <div className={boxInstagram()}>
                {instagram.slice(0, 4).map((item: any, index: number) => (
                  <div key={index} className={boxInstagramImage()}>
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-full w-full"
                      src={item.url.large ?? item.url.medium}
                      alt={item.alt}
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
                {youtube.items.slice(1, 5).map((item: any, index: number) => (
                  <div key={index} className={boxYoutubeImage()}>
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-full w-full"
                      src={
                        item?.snippet?.thumbnails?.maxres?.url ??
                        item?.snippet?.thumbnails?.default?.url
                      }
                      alt={item?.snippet?.videoOwnerChannelTitle}
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
