import {
  AskedQuestion,
  Banner,
  FeaturedPrograms,
  Testimonial,
  ThreeCareer,
} from '../shared'
import { HomeHero, HomeSponsor } from './components'

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedPrograms
        title="Program LPK COOP Indonesia"
        subtitle={`LPK COOP Indonesia's Berikut program utama dari LPK COOP Indonesia`}
      />
      <HomeSponsor />
      {/* <HomePublication /> */}
      <Testimonial />
      <AskedQuestion />
      <ThreeCareer />
      <Banner />
    </>
  )
}
