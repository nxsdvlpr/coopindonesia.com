import { Flexbox, Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'
import Card from './components/card'

type FeaturedProgramsProps = {
  title?: string
  subtitle?: string
  variant?: 'none' | 'gray'
}

export default function FeaturedPrograms({
  title: programTitle,
  subtitle: programSubtitle,
  variant,
}: FeaturedProgramsProps) {
  const t = useTranslations()

  return (
    <Section variant={variant}>
      <Flexbox flow="col" gap="2xl">
        <SectionTitle
          title={programTitle ?? t(`sharedContent.featuredPrograms.title`)}
        >
          {programSubtitle ?? t(`sharedContent.featuredPrograms.subtitle`)}
        </SectionTitle>
        <div className="grid gap-8 lg:grid-cols-3">
          {t
            .raw(`sharedContent.featuredPrograms.programs`)
            .map((program: any, index: number) => (
              <Card
                key={index}
                title={program.title}
                src={program.src}
                alt={program.alt}
                href={program.href}
                titleButton={program.labelButton}
              >
                {program.description}
              </Card>
            ))}
        </div>
      </Flexbox>
    </Section>
  )
}
