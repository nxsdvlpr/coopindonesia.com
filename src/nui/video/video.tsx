'use client'

import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { VideoProps } from './types'

export function Video({ src, youtubeId }: VideoProps) {
  const [data, setData] = useState<boolean>(false)

  useEffect(() => {
    setData(true)
  }, [])

  if (!data) return null

  return (
    <div className="aspect-video w-full  overflow-hidden rounded-lg">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={src ? src : `https://www.youtube.com/watch?v=${youtubeId}`}
      />
    </div>
  )
}
