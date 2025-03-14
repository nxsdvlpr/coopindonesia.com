import AskedQuestion from '@/features/shared/asked-question'
import Banner from '@/features/shared/banner'
import FeaturedPrograms from '@/features/shared/featured-programs'
import { Menu } from '@/features/shared/menu'
import { Flexbox, Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'
import Address from './registration/address'
import HowToRegistration from './registration/how-to-registration'
import Info from './registration/info'
import Requirement from './registration/requirement'

export default function InternshipRegistration() {
  const t = useTranslations()

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('internshipRegistration.info')}
          title={t('internshipRegistration.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="2xl">
          <Requirement />
          <div className="h-1 w-full border-b border-gray-200" />
          <HowToRegistration />
          <Info />
          <div className="h-1 w-full border-b border-gray-200" />
          <Address />
        </Flexbox>
      </Section>
      <Menu showMenuInternship />
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
