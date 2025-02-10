import { nihonggoDataStatic } from '@/app/[locale]/api/nihonggo'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'

export default function Nihonggo() {
  const { info, title, image, contents } = nihonggoDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox align="normal" flow="col" gap="xl">
          <div className="mx-auto max-w-[28.75rem]">
            <ImageNui src={image.src} alt={image.alt} />
          </div>

          {contents.map((content, index) => (
            <Flexbox key={index} flow="col" gap="none" align="normal">
              {content.title && (
                <Typo size="2xl" fontWeight="bold" color="gray-900">
                  {content.title}
                </Typo>
              )}
              <Markdown size="lg">{content.body}</Markdown>
            </Flexbox>
          ))}
        </Flexbox>
      </Section>
      <Menu showMenuNihonggo />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
