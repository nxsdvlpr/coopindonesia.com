import { internshipRightsObligationsDataStatic } from '@/app/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipRightsObligations() {
  const {
    info,
    title,
    image,
    titleRights,
    contentRights,
    titleObligations,
    contentObligations,
  } = internshipRightsObligationsDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="2xl">
          <div className="mx-auto shrink-0 lg:w-[28.75rem]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src={image.src}
              alt={image.alt}
            />
          </div>
          <Flexbox flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {titleRights}
            </Typo>
            <Markdown size="lg">{contentRights}</Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="none" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {titleObligations}
            </Typo>
            <Markdown size="lg">{contentObligations}</Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
