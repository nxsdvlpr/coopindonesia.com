import { testimonialDataStatic } from '@/app/[locale]/api/testimonial'
import {
  Box,
  Flexbox,
  Icon,
  ImageNui,
  Section,
  SectionTitle,
  Typo,
} from '@/nui'
import { testimonialStyle } from './testimonial.style'

export default function Testimonial() {
  const { wrapper, main, boxImage, background } = testimonialStyle()

  const { title, subtitle, items } = testimonialDataStatic

  if (testimonialDataStatic) return null

  return (
    <Section>
      <Flexbox align="normal" justify="normal" flow="col" gap="2xl">
        <SectionTitle title={title}>{subtitle}</SectionTitle>
        <div className={wrapper()}>
          {items.map((item) => (
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
