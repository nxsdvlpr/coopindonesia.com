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
import { Suspense } from 'react'
import { instagramData, youtubeData } from './api/publication'

export default async function HomePage() {
  const youtube = await youtubeData()

  const instagram = await instagramData()

  return (
    <>
      <HomeHero />
      <FeaturedPrograms
        title="Program LPK COOP Indonesia"
        subtitle={`LPK COOP Indonesia's Berikut program utama dari LPK COOP Indonesia`}
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
