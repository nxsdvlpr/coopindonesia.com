import {
  Box,
  Flexbox,
  Icon,
  ImageNui,
  Section,
  SectionTitle,
  Typo,
} from '@/nui'
import { useTranslations } from 'next-intl'
import { testimonialStyle } from './testimonial.style'

export default function Testimonial() {
  const hideContent = true
  const t = useTranslations()
  const { wrapper, main, boxImage, background } = testimonialStyle()

  if (hideContent) return null

  return (
    <Section>
      <Flexbox align="normal" justify="normal" flow="col" gap="2xl">
        <SectionTitle title={t('testimonial.title')}>
          {t('testimonial.subtitle')}
        </SectionTitle>
        <div className={wrapper()}>
          {t.raw('testimonial.items').map((item: any) => (
            <div key={item.name} className={main()}>
              <Box withBorder>
                <Flexbox align="end" justify="between">
                  <div className="mb-3">
                    <ImageNui
                      src="/quotation-mark.svg"
                      alt="quotation-mark-coop-indonesia"
                    />
                  </div>
                  <div className={boxImage()}>
                    {item.imageSrc ? (
                      <ImageNui src={item.imageSrc} alt={item.name} />
                    ) : (
                      <Icon size="xl" icon="lucide:user" />
                    )}
                  </div>
                </Flexbox>
                <Typo size="xl" color="gray-900" fontWeight="bold">
                  {item.name}
                </Typo>
                <Flexbox align="start" flow="col" gap="xs">
                  <Typo size="lg" color="gray-500">
                    {item.position}
                  </Typo>
                  <Typo size="lg">{item.desc}</Typo>
                </Flexbox>
              </Box>
              <div className={background()} />
            </div>
          ))}
        </div>
      </Flexbox>
    </Section>
  )
}
