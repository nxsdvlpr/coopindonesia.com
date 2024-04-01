import { internshipEducationalMaterialDataStatic } from '@/app/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipEducationalMaterial() {
  const { info, title, image, contents } =
    internshipEducationalMaterialDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="2xl" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {title}
          </Typo>
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="mx-auto max-w-[17.5rem] shrink-0">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src={image.src}
                alt={image.alt}
              />
            </div>
            <Flexbox flow="col" gap="lg">
              {contents.map((content, index) => (
                <Flexbox key={index} flow="col" gap="xs" align="normal">
                  <Typo size="lg" fontWeight="bold">
                    {content.title}
                  </Typo>
                  <Typo size="lg">{content.body}</Typo>
                </Flexbox>
              ))}
            </Flexbox>
          </div>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
