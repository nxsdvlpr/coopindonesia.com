import {
  FeaturedProgramsHome,
  HeroHome,
  PublicationHome,
  SponsorHome,
  TestimonialHome,
} from './components'

export default function Home() {
  return (
    <>
      <HeroHome />
      <FeaturedProgramsHome />
      <SponsorHome />
      <PublicationHome />
      <TestimonialHome />
    </>
  )
}
