import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipProgramFlow() {
  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Alur Program"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="4xl">
          <Flexbox flow="col" gap="2xs" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              Alur Program
            </Typo>
            <Typo size="lg" fontWeight="bold" color="gray-900">
              1. Skema Program Reguler
            </Typo>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src="/program/program-flow-image-1.svg"
              alt="program-flow-image-1-coop-indonesia"
            />
          </Flexbox>
          <Flexbox flow="col" gap="2xs" align="normal">
            <Typo size="lg" fontWeight="bold" color="gray-900">
              2. Skema Program Perawat
            </Typo>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src="/program/program-flow-image-2.svg"
              alt="program-flow-image-2-coop-indonesia"
            />
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
