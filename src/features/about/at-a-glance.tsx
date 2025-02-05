import { aboutAtAGlanceDataStatic } from '@/app/[locale]/api/about'
import { Flexbox, ImageNui, Markdown, Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'
import { AskedQuestion, Banner, Testimonial } from '../shared'
import { Menu } from '../shared/menu'

export default function AtaGlance() {
  const t = useTranslations()
  const { title, subtitle, contents } = aboutAtAGlanceDataStatic

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="ABOUT US"
          title={t('aboutPage.aboutAtAGlance.title')}
        >
          <Markdown size="lg">
            {t('aboutPage.aboutAtAGlance.subtitle')}
          </Markdown>
        </SectionTitle>
      </Section>
      <Section>
        <Flexbox flow="col" gap="4xl">
          {t
            .raw('aboutPage.aboutAtAGlance.contents')
            .map((content: any, index: number) => (
              <div
                key={index}
                className={
                  index === 1
                    ? 'flex flex-col-reverse lg:flex-row-reverse'
                    : 'flex flex-col lg:flex-row '
                }
              >
                <Markdown size="lg">{content.content}</Markdown>
                <div className="h-full max-w-[30rem] shrink-0">
                  <ImageNui src={content.image.src} alt={content.image.alt} />
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
