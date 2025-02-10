import { Flexbox, Section, SectionTitle } from '@/nui'
import { TypoSize } from '@/nui/typo/types'
import { useTranslations } from 'next-intl'
import ThreeCareerCard from './card'
import ThreeCareerTable from './table'

type ThreeCareerProps = {
  info?: string
  sizeTitle?: TypoSize
}

export function ThreeCareer({ info, sizeTitle }: ThreeCareerProps) {
  const t = useTranslations()
  return (
    <Section>
      <Flexbox align="normal" justify="normal" flow="col" gap="2xl">
        <SectionTitle
          sizeTitle={sizeTitle}
          info={info}
          title={t('sharedContent.threeCareer.title')}
        >
          {t('sharedContent.threeCareer.subtitle')}
        </SectionTitle>
        <ThreeCareerCard />
        <ThreeCareerTable />
      </Flexbox>
    </Section>
  )
}
