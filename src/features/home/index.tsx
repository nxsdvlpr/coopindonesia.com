import AskedQuestion from '../shared/asked-question'
import Banner from '../shared/banner'
import FeaturedPrograms from '../shared/featured-programs'
import {
  HomeCareer,
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
      <HomeCareer />
      <Banner />
    </>
  )
}
