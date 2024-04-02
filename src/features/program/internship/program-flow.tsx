import { internshipProgramFlowDataStatic } from '@/app/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipProgramFlow() {
  const { info, title, steps } = internshipProgramFlowDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="4xl">
          {steps.map((step, index) => (
            <Flexbox key={index} flow="col" gap="2xs" align="normal">
              {step.titleStep && (
                <Typo size="2xl" fontWeight="bold" color="gray-900">
                  {step.titleStep}
                </Typo>
              )}
              <Typo size="lg" fontWeight="bold" color="gray-900">
                {step.title}
              </Typo>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src={step.image.src}
                alt={step.image.alt}
              />
            </Flexbox>
          ))}
        </Flexbox>
      </Section>
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
