import { Flexbox, ImageNui, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import { AskedQuestion, Banner, Testimonial } from '../shared'
import { Menu } from '../shared/menu'

export default function VisionMission() {
  const t = useTranslations()

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('aboutPage.aboutVisionAndMission.info')}
          title={t('aboutPage.aboutVisionAndMission.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <div className="flex flex-col gap-8 lg:flex-row">
          <Flexbox align="normal" flow="col" gap="xs">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {t('aboutPage.aboutVisionAndMission.vision.title')}
            </Typo>
            <Markdown size="lg">
              {t('aboutPage.aboutVisionAndMission.vision.description')}
            </Markdown>
          </Flexbox>
          <div className="mx-auto h-full max-w-[18.75rem] shrink-0">
            <ImageNui
              src={t('aboutPage.aboutVisionAndMission.vision.image.src')}
              alt={t('aboutPage.aboutVisionAndMission.vision.image.alt')}
            />
          </div>
        </div>
        <Flexbox align="normal" flow="col" gap="xs">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {t('aboutPage.aboutVisionAndMission.mission.title')}
          </Typo>
          <Markdown size="lg">
            {t('aboutPage.aboutVisionAndMission.mission.description')}
          </Markdown>
        </Flexbox>
      </Section>
      <Menu showMenuAbout borderBottom />
      <Testimonial />
      <AskedQuestion />
      <Banner />
    </>
  )
}
