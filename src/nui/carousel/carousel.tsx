'use client'

import { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import NextArrow from './components/next-arrow'
import PrevArrow from './components/prev-arrow'

import 'react-alice-carousel/lib/alice-carousel.css'

const thumbItems = (items: any, [setThumbIndex, setThumbAnimation]: any) => {
  return items.map((item: any, i: any) => (
    <div
      className="w-fit pr-4"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      <div className="h-[5.625rem] w-[7.5rem] overflow-hidden rounded-lg">
        {item}
      </div>
    </div>
  ))
}

export type CarouselProps = {
  items: any[]
}

export default function Carousel({ items }: CarouselProps) {
  const [mainIndex, setMainIndex] = useState(0)
  const [mainAnimation, setMainAnimation] = useState(false)
  const [thumbIndex, setThumbIndex] = useState(0)
  const [thumbAnimation, setThumbAnimation] = useState(false)
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  )

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex + 1)
    }
  }

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex - 1)
    }
  }

  const syncMainBeforeChange = (e: any) => {
    setMainAnimation(true)
  }

  const syncMainAfterChange = (e: any) => {
    setMainAnimation(false)

    if (e.type === 'action') {
      setThumbIndex(e.item)
      setThumbAnimation(false)
    } else {
      setMainIndex(thumbIndex)
    }
  }

  const syncThumbs = (e: any) => {
    setThumbIndex(e.item)
    setThumbAnimation(false)

    if (!mainAnimation) {
      setMainIndex(e.item)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="relative h-fit w-full overflow-hidden rounded-lg lg:h-[28.125rem]">
        <AliceCarousel
          activeIndex={mainIndex}
          animationType="fadeout"
          animationDuration={800}
          disableDotsControls
          disableButtonsControls
          items={items}
          infinite
          mouseTracking={!thumbAnimation}
          onSlideChange={syncMainBeforeChange}
          onSlideChanged={syncMainAfterChange}
          touchTracking={!thumbAnimation}
        />

        <PrevArrow onClick={slidePrev} />
        <NextArrow onClick={slideNext} />
      </div>
      <div className="h-[5.625rem]">
        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth
          disableDotsControls
          infinite
          disableButtonsControls
          items={thumbs}
          mouseTracking={false}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
        />
      </div>
    </div>
  )
}
