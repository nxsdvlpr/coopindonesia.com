import { intershipDataStatic } from '@/app/[locale]/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { ImageNui, Markdown, Section, SectionTitle } from '@/nui'
import { Fragment } from 'react'

export default function Internship() {
  const { info, title, subtitle, body, image, contents } = intershipDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title}>
          {subtitle}
        </SectionTitle>
      </Section>
      <Section maxWidth="sm">
        <div className="flex flex-col gap-8">
          <div className="mx-auto w-full lg:w-[30rem]">
            <ImageNui src={image.src} alt={image.alt} />
          </div>
          <Markdown>{body}</Markdown>
          {contents.map((content, index) => (
            <Fragment key={index}>
              <div className="flex flex-col gap-6 lg:flex-row">
                {content.images.map((item, indexImage) => (
                  <div
                    key={indexImage}
                    className="overflow-hidden rounded-2xl lg:w-[23.5rem]"
                  >
                    <ImageNui src={item.src} alt={item.alt} />
                  </div>
                ))}
              </div>
              <Markdown>{content.body}</Markdown>
            </Fragment>
          ))}
        </div>
      </Section>
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
