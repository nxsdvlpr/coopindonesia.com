import AskedQuestion from '@/features/shared/asked-question'
import Banner from '@/features/shared/banner'
import FeaturedPrograms from '@/features/shared/featured-programs'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function VisionMissionPage() {
  return (
    <>
      <Section>
        <SectionTitle info="ABOUT US" title="Vision & Mission" />
      </Section>
      <Section>
        <div className="m-auto flex max-w-[50rem] flex-col justify-between gap-12 px-10">
          <Flexbox justify="between" gap="xl">
            <Flexbox align="normal" flow="col" gap="xs">
              <Typo size="xl" fontWeight="bold" color="gray-900">
                Vision
              </Typo>
              <Typo size="md" color="gray-700">
                Tersedianya sumber daya manusia yang profesional dan handal guna
                mengembangkan sinergi kebersamaan sosial atas dasar kesetaraan
                dan keadilan bagi peningkatan kesejahteraan rakyat, daya saing
                dan kemajuan bangsa.
              </Typo>
            </Flexbox>
            <div className="w-[300px] shrink-0">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/about/vision-and-mission-image-1.svg"
                alt="Vision & Mission"
              />
            </div>
          </Flexbox>
          <Flexbox align="normal" flow="col" gap="xs">
            <Typo size="xl" fontWeight="bold" color="gray-900">
              Vision
            </Typo>
            <Typo size="md" color="gray-700">
              Tersedianya sumber daya manusia yang profesional dan handal guna
              mengembangkan sinergi kebersamaan sosial atas dasar kesetaraan dan
              keadilan bagi peningkatan kesejahteraan rakyat, daya saing dan
              kemajuan bangsa.
            </Typo>
          </Flexbox>
        </div>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
