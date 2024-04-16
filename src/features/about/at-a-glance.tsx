import { aboutAtAGlanceDataStatic } from '@/app/api/about'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle } from '@/nui'
import { AskedQuestion, Banner, Testimonial } from '../shared'
import { Menu } from '../shared/menu'

export default function AtaGlance() {
  const { title, subtitle, contents } = aboutAtAGlanceDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="ABOUT US" title={title}>
          <Markdown size="lg">{subtitle}</Markdown>
        </SectionTitle>
      </Section>
      <Section>
        <Flexbox flow="col" gap="4xl">
          {contents.map((item, index) => (
            <div
              key={index}
              className={
                index === 1
                  ? 'flex flex-col-reverse lg:flex-row-reverse'
                  : 'flex flex-col lg:flex-row '
              }
            >
              <Markdown size="lg">{item.content}</Markdown>
              <div className="h-full max-w-[30rem] shrink-0">
                <ImageNui src={item.image.src} alt={item.image.alt} />
              </div>
            </div>
          ))}
        </Flexbox>
      </Section>
      <Menu showMenuAbout borderBottom />
      <Testimonial />
      <AskedQuestion />
      <Banner />
    </>
  )
}
