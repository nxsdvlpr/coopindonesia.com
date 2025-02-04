import { internshipEducationalMaterialDataStatic } from '@/app/[locale]/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Section, SectionTitle, Typo } from '@/nui'

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
            <div className="mx-auto h-full max-w-[17.5rem] shrink-0">
              <ImageNui src={image.src} alt={image.alt} />
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
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
