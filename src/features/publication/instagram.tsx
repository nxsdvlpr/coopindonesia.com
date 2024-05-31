'use client'

import { instagramData } from '@/app/api/publication'
import { ImageNui, Section, SectionTitle } from '@/nui'
import { useEffect, useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

export default function Instagram() {
  const [instagrams, setInstagrams] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await instagramData()
        setInstagrams(data ?? [])
      } catch (error) {
        console.error('Error fetching Instagram data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PUBLICATION"
          title="Dari Akun Media Sosial Kami"
        />
      </Section>
      <Section>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          <PhotoProvider maskOpacity={0.7}>
            {instagrams.map((item: any, index: number) => (
              <PhotoView key={index} src={item.url.large ?? item.url.medium}>
                <div className="group h-[10rem] w-full cursor-pointer overflow-hidden rounded-lg lg:h-[16.5rem]">
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
      </Section>
    </>
  )
}
