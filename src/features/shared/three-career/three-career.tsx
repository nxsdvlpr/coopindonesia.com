import { Flexbox, Section, SectionTitle } from '@/nui'
import { TypoSize } from '@/nui/typo/types'
import ThreeCareerCard from './card'
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
          Program komprehensif untuk pengembangan keterampilan bahasa dan budaya
          Jepang, serta pengalaman berharga di Jepang.
        </SectionTitle>
        <ThreeCareerCard />
        <ThreeCareerTable />
      </Flexbox>
    </Section>
  )
}
