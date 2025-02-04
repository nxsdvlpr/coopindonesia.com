import { featuredProgramDataStatic } from '@/app/api/featured-program'
import { Flexbox, Section, SectionTitle } from '@/nui'
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
  const { title, subtitle, programs } = featuredProgramDataStatic
  // test

  return (
    <Section variant={variant}>
      <Flexbox flow="col" gap="2xl">
        <SectionTitle title={programTitle ?? title}>
          {programSubtitle ?? subtitle}
        </SectionTitle>
        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Card
              key={index}
              title={program.title}
              src={program.src}
              alt={program.alt}
              href={program.href}
            >
              {program.description}
            </Card>
          ))}
        </div>
      </Flexbox>
    </Section>
  )
}
