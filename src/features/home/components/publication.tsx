'use client'

import { Flexbox, ImageNui, Section, SectionTitle, Typo } from '@/nui'
import { Video } from '@/nui/video'
import { useParam } from '@/utils/use-params'
import { PhotoProvider, PhotoView } from 'react-photo-view'

import { useTranslations } from 'next-intl'
import { homePublicationStyle } from './publication.style'

type HomePublicationProps = {
  youtube: any
  instagram: any
}

export default function HomePublication({
  youtube,
  instagram,
}: HomePublicationProps) {
  const t = useTranslations()
  const {
    imageBox,
    main,
    boxInstagram,
    boxInstagramImage,
    boxYoutube,
    boxYoutubeImage,
  } = homePublicationStyle()

  const videoId = youtube?.items?.[0]?.snippet?.resourceId?.videoId ?? ''

  const { onClickParam } = useParam()

  return (
    <Section>
      <Flexbox flow="col" gap="2xl">
        <SectionTitle title={t('homePage.publication.title')}>
          {t('homePage.publication.subtitle')}
        </SectionTitle>
        <Flexbox align="normal" flow="col" gap="2xl">
          <div className={imageBox()}>
            <Video youtubeId={videoId} />
          </div>
          <div className={main()}>
            <Flexbox align="start" flow="col" gap="xs">
              <Typo size="xl" color="gray-900" fontWeight="bold">
                {t('homePage.publication.instagram.title')}
              </Typo>
              <div className={boxInstagram()}>
                <PhotoProvider maskOpacity={0.7}>
                  {instagram?.slice(0, 4).map((item: any, index: number) => (
                    <PhotoView
                      key={index}
                      src={item.url.large ?? item.url.medium}
                    >
                      <div className={boxInstagramImage()}>
                        <ImageNui
                          className="h-full w-full duration-200 ease-in-out hover:brightness-90 group-hover:scale-105"
                          src={item.url.large ?? item.url.medium}
                          alt={item.alt ?? 'coop-indonesia'}
                        />
                      </div>
                    </PhotoView>
                  ))}
                </PhotoProvider>
              </div>
            </Flexbox>
            <Flexbox align="start" flow="col" gap="xs">
              <Typo size="xl" color="gray-900" fontWeight="bold">
                {t('homePage.publication.youtube.title')}
              </Typo>
              <div className={boxYoutube()}>
                {youtube.items
                  .filter(
                    (item: any) =>
                      item?.snippet?.thumbnails?.maxres?.url !== undefined ||
                      item?.snippet?.thumbnails?.default?.url !== undefined
                  )
                  .slice(1, 5)
                  .map((item: any, index: number) => (
                    <button
                      key={index}
                      className={boxYoutubeImage()}
                      onClick={() =>
                        onClickParam(
                          'publication/vlog/?',
                          item?.snippet?.resourceId?.videoId
                        )
                      }
                    >
                      <ImageNui
                        className="h-full w-full duration-200 ease-in-out hover:brightness-90 group-hover:scale-105"
                        src={
                          item?.snippet?.thumbnails?.maxres?.url ??
                          item?.snippet?.thumbnails?.default?.url
                        }
                        alt={item?.snippet?.videoOwnerChannelTitle}
                      />
                    </button>
                  ))}
              </div>
            </Flexbox>
          </div>
        </Flexbox>
      </Flexbox>
    </Section>
  )
}
