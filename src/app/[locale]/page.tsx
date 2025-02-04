'use client'
import {
  HomeHero,
  HomePublication,
  HomeSponsor,
} from '@/features/home/components'
import {
  AskedQuestion,
  Banner,
  FeaturedPrograms,
  Testimonial,
  ThreeCareer,
} from '@/features/shared'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import { instagramData, youtubeData } from './api/publication'

export default async function HomePage() {
  const t = useTranslations()

  const youtube = await youtubeData()

  const instagram = await instagramData()

  return (
    <>
      <HomeHero />
      <FeaturedPrograms
        title={t('homePage.featuredPrograms.title')}
        subtitle={t('homePage.featuredPrograms.subtitle')}
      />
      <HomeSponsor />
      <Suspense>
        <HomePublication youtube={youtube} instagram={instagram} />
      </Suspense>
      <Testimonial />
      <AskedQuestion />
      <ThreeCareer />
      <Banner />
    </>
  )
}
