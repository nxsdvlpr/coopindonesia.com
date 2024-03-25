'use client'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Icon, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../../../styles/slick-theme.css'

const items = [
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    src="/from-our-youtube-channel/from-our-youtube-channel-image-1.png"
    alt="placement-progress-image-1-coop-indonesia"
  />,
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    src="/from-our-youtube-channel/from-our-youtube-channel-image-2.png"
    alt="placement-progress-image-1-coop-indonesia"
  />,
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    src="/from-our-youtube-channel/from-our-youtube-channel-image-3.png"
    alt="placement-progress-image-1-coop-indonesia"
  />,
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    src="/from-our-youtube-channel/from-our-youtube-channel-image-3.png"
    alt="placement-progress-image-1-coop-indonesia"
  />,
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    src="/from-our-youtube-channel/from-our-youtube-channel-image-3.png"
    alt="placement-progress-image-1-coop-indonesia"
  />,
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    src="/from-our-youtube-channel/from-our-youtube-channel-image-3.png"
    alt="placement-progress-image-1-coop-indonesia"
  />,
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    src="/from-our-youtube-channel/from-our-youtube-channel-image-3.png"
    alt="placement-progress-image-1-coop-indonesia"
  />,
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    src="/from-our-youtube-channel/from-our-youtube-channel-image-3.png"
    alt="placement-progress-image-1-coop-indonesia"
  />,
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    src="/from-our-youtube-channel/from-our-youtube-channel-image-3.png"
    alt="placement-progress-image-1-coop-indonesia"
  />,
]

const thumbItems = (items: any, [setThumbIndex, setThumbAnimation]: any) => {
  return items.map((item: any, i: any) => (
    <div
      className="pr-4 w-fit"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      <div className="w-[120px] overflow-hidden rounded-lg">{item}</div>
    </div>
  ))
}
export default function InternshipPreSelection() {
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
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Pra Seleksi"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            Kegiatan Pra Seleksi
          </Typo>
          <Typo size="lg">
            Merupakan kegiatan pra-seleksi yang dilakukan oleh{' '}
            <strong>Divisi Pengembangan SDM COOP Indonesia</strong> dalam rangka
            mencari calon peserta yang memenuhi kriteria peserta magang.
            <br />
            <br /> Berikut foto-foto kegiatan pra - seleksi di LPK Coop
            Indonesia
          </Typo>
        </Flexbox>
        <div className="h-6" />

        <div className="relative">
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
          <button
            type="button"
            className="absolute left-4 top-1/2 flex items-center justify-center rounded-full bg-black p-1 text-white"
            onClick={slidePrev}
          >
            <Icon icon="lucide:chevron-left" />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 flex items-center justify-center rounded-full bg-black p-1 text-white"
            onClick={slideNext}
          >
            <Icon icon="lucide:chevron-right" />
          </button>
        </div>
        <div className="h-10">
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
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
