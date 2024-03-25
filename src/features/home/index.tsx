import { FeaturedPrograms, AskedQuestion, ThreeCareer, Banner } from '../shared'
import {
  HomeHero,
  HomePublication,
  HomeSponsor,
  HomeTestimonial,
} from './components'

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedPrograms />
      <HomeSponsor />
      <HomePublication />
      <HomeTestimonial />
      <AskedQuestion />
      <ThreeCareer />
      <Banner />
    </>
  )
}
