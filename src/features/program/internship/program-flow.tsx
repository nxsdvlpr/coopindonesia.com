import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipProgramFlow() {
  const internshipProgramFlow = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Alur Program',
    steps: [
      {
        titleStep: 'Alur Program',
        title: 'Skema Program Reguler',
        image: {
          src: '/program/program-flow-image-1.svg',
          alt: 'program-flow-image-1-coop-indonesia',
        },
      },
      {
        title: 'Skema Program Perawat',
        image: {
          src: '/program/program-flow-image-2.svg',
          alt: 'program-flow-image-2-coop-indonesia',
        },
      },
    ],
  }

  const { info, title, steps } = internshipProgramFlow

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="content">
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
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
