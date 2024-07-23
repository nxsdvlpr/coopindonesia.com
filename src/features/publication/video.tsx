'use client'

import { youtubeData } from '@/app/api/publication'
import { Flexbox, ImageNui, Section } from '@/nui'
import { Video } from '@/nui/video'
import { useParam } from '@/utils/use-params'
import { useEffect, useState } from 'react'

export default function VideoVlog() {
  const [data, setdata] = useState<any>([])

  console.log(
    'data',
    data?.items?.filter((item: any) => item?.snippet?.title === 'Deleted video')
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await youtubeData()
        setdata(data ?? [])
      } catch (error) {
        console.error('Error fetching Instagram data:', error)
      }
    }

    fetchData()
  }, [])

  const filterData = data?.items?.filter(
    (item: any) => item?.snippet?.title !== 'Deleted video'
  )

  const id = filterData?.[0]?.snippet?.resourceId?.videoId ?? ''

  const { onClickParam, videoId } = useParam()

  return (
    <Section>
      <Flexbox flow="col" gap="3xl">
        <Video youtubeId={videoId ?? id} />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {filterData?.slice(1)?.map((item: any, index: number) => (
            <button
              key={index}
              className="group flex h-fit flex-col gap-4 text-start text-base font-semibold text-gray-900 hover:text-primary-500 focus:outline-none"
              onClick={() =>
                onClickParam('?', item?.snippet?.resourceId?.videoId)
              }
            >
              <div className="aspect-video max-h-[9.6875rem] w-full">
                <ImageNui
                  className="h-full w-full rounded-lg object-cover group-hover:brightness-75"
                  src={
                    item?.snippet?.thumbnails?.maxres?.url ??
                    item?.snippet?.thumbnails?.default?.url
                  }
                  alt={item?.snippet?.videoOwnerChannelTitle}
                />
              </div>
              <div>{item?.snippet?.title}</div>
            </button>
          ))}
        </div>
      </Flexbox>
    </Section>
  )
}
