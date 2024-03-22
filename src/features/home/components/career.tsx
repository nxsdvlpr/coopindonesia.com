import { Flexbox, Section, SectionTitle } from '@/nui'
import TableCareer from './table'

export function HomeCareer() {
  return (
    <Section>
      <Flexbox align="normal" justify="normal" flow="col" gap="2xl">
        <SectionTitle title="Three Career Paths in Japan">
          Comprehensive programs offering skill development in Japanese language
          and culture, alongside valuable real-world experience in Japan.
        </SectionTitle>
        <TableCareer />
      </Flexbox>
    </Section>
  )
}
