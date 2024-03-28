import {
  AskedQuestion,
  Banner,
  FeaturedPrograms,
  Testimonial,
  ThreeCareer,
} from '../shared'
import { HomeHero, HomePublication, HomeSponsor } from './components'

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
      <Testimonial />
      <AskedQuestion />
      <ThreeCareer />
      <Banner />
    </>
  )
}
