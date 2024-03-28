import { Section, SectionTitle } from '@/nui'
import { AskedQuestion, Banner, Testimonial } from '../shared'
import OrganizationStructureAgriculture from './organization-structure/agriculture'
import OrganizationStructureContactInfo from './organization-structure/contact-info'
import OrganizationStructureDevelopment from './organization-structure/development'
import OrganizationStructureEducation from './organization-structure/education'
import OrganizationStructureHeadOffice from './organization-structure/head-office'
import OrganizationStructureMICE from './organization-structure/mice'
import OrganizationStructureRepresentativeOffice from './organization-structure/representative-office'

export default function OrganizationStructure() {
  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="ABOUT US"
          title="Organization Structure"
        >
          LPK COOP Indonesia memiliki jaringan organisasi di Indonesia dan juga
          kantor perwakilan di Jepang.
        </SectionTitle>
      </Section>
      <Section>
        <div className="m-auto flex max-w-[60rem] flex-col gap-12">
          <div className="flex flex-col lg:flex-row">
            <OrganizationStructureContactInfo
              name="Prof. Dr. Ir. Ginandjar Kartasasmita"
              position="Dewan Penasehat"
            />
            <OrganizationStructureContactInfo
              name="H. Rahmat"
              position="Dewan Penasehat"
            />
            <OrganizationStructureContactInfo
              name="Herson Tendean, S.Kom"
              position="Ketua"
            />
          </div>
          <div className="h-1 w-full border-b border-gray-200" />
          <OrganizationStructureRepresentativeOffice />
          <div className="h-1 w-full border-b border-gray-200" />
          <OrganizationStructureHeadOffice />
          <div className="h-1 w-full border-b border-gray-200" />
          <OrganizationStructureDevelopment />
          <div className="h-1 w-full border-b border-gray-200" />
          <OrganizationStructureEducation />
          <div className="h-1 w-full border-b border-gray-200" />
          <OrganizationStructureAgriculture />
          <div className="h-1 w-full border-b border-gray-200" />
          <OrganizationStructureMICE />
        </div>
      </Section>
      <Testimonial />
      <AskedQuestion />
      <Banner />
    </>
  )
}
