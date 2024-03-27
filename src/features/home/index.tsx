import { AskedQuestion, Banner, FeaturedPrograms, ThreeCareer } from '../shared'
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
      <FeaturedPrograms
        title="Featured Programs"
        subtitle={`LPK Coop Indonesia's top choice programs`}
      />
      <HomeSponsor />
      <HomePublication />
      <HomeTestimonial />
      <AskedQuestion />
      <ThreeCareer />
      <Banner />
    </>
  )
}
