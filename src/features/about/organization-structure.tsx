import { aboutOrganizationStructure } from '@/app/[locale]/api/about'
import { Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'
import { AskedQuestion, Banner, Testimonial } from '../shared'
import { Menu } from '../shared/menu'
import Agriculture from './organization-structure/agriculture'
import ContactInfo from './organization-structure/contact-info'
import Development from './organization-structure/development'
import Education from './organization-structure/education'
import HeadOffice from './organization-structure/head-office'
import Mice from './organization-structure/mice'
import RepresentativeOffice from './organization-structure/representative-office'

export default function OrganizationStructure() {
  const t = useTranslations()
  const { info, title, subtitle, members } = aboutOrganizationStructure

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('aboutPage.aboutOrganizationStructure.info')}
          title={t('aboutPage.aboutOrganizationStructure.title')}
        >
          {t('aboutPage.aboutOrganizationStructure.subtitle')}
        </SectionTitle>
      </Section>
      <Section>
        <div className="m-auto flex max-w-[60rem] flex-col gap-12">
          <div className="flex flex-col lg:flex-row">
            {t
              .raw('aboutPage.aboutOrganizationStructure.members')
              .map((member: any, index: number) => (
                <ContactInfo
                  key={index}
                  name={member.name}
                  position={member.position}
                  src={member.src}
                />
              ))}
          </div>
          <RepresentativeOffice />
          <HeadOffice />
          <Development />
          <Education />
          <Agriculture />
          <Mice />
        </div>
      </Section>
      <Menu showMenuAbout borderBottom />
      <Testimonial />
      <AskedQuestion />
      <Banner />
    </>
  )
}
