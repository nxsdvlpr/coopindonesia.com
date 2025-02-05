import { bannerDataStatic } from '@/app/[locale]/api/banner'
import { Button, Flexbox, ImageNui, Section, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import { bannerStyle } from './index.style'

export default function Banner() {
  const t = useTranslations()
  const { wrapper, container, box, image: imageStyle } = bannerStyle()

  const { image, title, desc, buttonName } = bannerDataStatic

  return (
    <Section>
      <div className={wrapper()}>
        <div className={container()}>
          <div className={box()}>
            <ImageNui
              className={imageStyle()}
              src={image.src}
              alt={image.alt}
            />
          </div>
          <Flexbox align="start" flow="col" gap="xl">
            <Flexbox align="normal" flow="col" gap="sm">
              <Typo size="3xl" fontWeight="extrabold" color="gray-900">
                {t('sharedContent.banner.title')}
              </Typo>
              <Typo size="lg" color="gray-900">
                {t('sharedContent.banner.desc')}
              </Typo>
            </Flexbox>
            <Button as="a" href="/contact-us">
              {t('sharedContent.banner.buttonName')}
            </Button>
          </Flexbox>
        </div>
      </div>
    </Section>
  )
}
