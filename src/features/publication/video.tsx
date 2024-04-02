'use client'

import { Flexbox, Section } from '@/nui'
import { Video } from '@/nui/video'
import Image from 'next/image'
import { useState } from 'react'

type VideoVlogProps = {
  data?: any
}

export default function VideoVlog({ data }: VideoVlogProps) {
  const id = data?.items?.[0]?.snippet?.resourceId?.videoId ?? ''

  const [videoId, setVideoId] = useState(id)

  return (
    <Section>
      <Flexbox flow="col" gap="3xl">
        <Video youtubeId={videoId} />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {data?.items?.slice(1)?.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => setVideoId(item?.snippet?.resourceId?.videoId)}
              className="group flex h-fit flex-col gap-4 text-start text-base font-semibold text-gray-900 hover:text-primary-600 focus:outline-none"
            >
              <div className="aspect-video max-h-[9.6875rem]">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
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
