import { intershipDataStatic } from '@/app/api/internship'
import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Menu } from '@/features/shared/menu'
import { Markdown, Section, SectionTitle } from '@/nui'
import Image from 'next/image'
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
        <div className="flex flex-col gap-12">
          <div className="mx-auto w-full lg:w-[30rem]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src={image.src}
              alt={image.alt}
            />
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
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-auto w-full"
                      src={item.src}
                      alt={item.alt}
                    />
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
