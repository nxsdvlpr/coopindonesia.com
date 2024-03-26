import { Flexbox, Typo } from '@/nui'
import OrganizationStructureContactInfo from './contact-info'

export default function OrganizationStructureRepresentativeOffice() {
  return (
    <>
      <div className="flex flex-col gap-12 text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          Kantor Perwakilan Jepang
        </Typo>
        <OrganizationStructureContactInfo
          name="Toshiyuki Sahara"
          position="Kepala Perwakilan"
        />
      </div>
      <Flexbox gap="none" justify="between">
        <OrganizationStructureContactInfo
          name="Tomoko Yamamoto"
          position="Perwakilan Area Tokyo"
        />
        <OrganizationStructureContactInfo
          name="Kosei Sahara"
          position="Perwakilan Area Tokyo"
        />
        <OrganizationStructureContactInfo
          name="Herizal Adhardi"
          position="Perwakilan Area Osaka"
        />
        <OrganizationStructureContactInfo
          name="Devi Riswanto"
          position="Perwakilan Area Aichi"
        />
      </Flexbox>
      <OrganizationStructureContactInfo
        name="Arief Rivani Nugraha, S.Pd."
        position="Corporate Secretary Area Tokyo"
      >
        Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan Indonesia,
        Alumni Shizouka University - Japan, JLPT N2
      </OrganizationStructureContactInfo>
    </>
  )
}
