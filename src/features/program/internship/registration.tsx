import AskedQuestion from '@/features/shared/asked-question'
import Banner from '@/features/shared/banner'
import FeaturedPrograms from '@/features/shared/featured-programs'
import { Flexbox, Section, SectionTitle } from '@/nui'
import Address from './registration/address'
import HowToRegistration from './registration/how-to-registration'
import Info from './registration/info'
import Requirement from './registration/requirement'

export default function InternshipRegistration() {
  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Pendaftaran"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="2xl">
          <Requirement />
          <div className="h-1 border-b border-gray-200" />
          <HowToRegistration />
          <Info />
          <div className="h-1 border-b border-gray-200" />
          <Address />
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
