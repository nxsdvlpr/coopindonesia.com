import { Flexbox, Section, SectionTitle } from '@/nui'
import { TypoSize } from '@/nui/typo/types'
import ThreeCareerTable from './table'

type ThreeCareerProps = {
  info?: string
  sizeTitle?: TypoSize
}

export function ThreeCareer({ info, sizeTitle }: ThreeCareerProps) {
  return (
    <Section>
      <Flexbox align="normal" justify="normal" flow="col" gap="2xl">
        <SectionTitle
          sizeTitle={sizeTitle}
          info={info}
          title="Three Career Paths in Japan"
        >
          Comprehensive programs offering skill development in Japanese language
          and culture, alongside valuable real-world experience in Japan.
        </SectionTitle>
        <ThreeCareerTable />
      </Flexbox>
    </Section>
  )
}
