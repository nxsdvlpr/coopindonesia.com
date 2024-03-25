import { Field, Fields, Flexbox, Typo } from '@/nui'
import OrganizationStructureContactInfo from './contact-info'

export default function OrganizationStructureAgriculture() {
  return (
    <>
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          Departemen Pertanian
        </Typo>
      </div>
      <Flexbox flow="col" gap="xl">
        <OrganizationStructureContactInfo name="Suyitno" position="Direktur">
          Alumni LPK COOP Indonesia Angk 6
        </OrganizationStructureContactInfo>
        <Flexbox flow="col" gap="sm" align="start">
          <Fields label="Supervisi Pertanian:">
            <Field>
              Mokhamad Said
              <p className="leading-6 text-gray-500">
                (Alumni LPK COOP Indonesia Angkatan 1)
              </p>
            </Field>
          </Fields>
          <Fields label="Administrasi Pertanian:">
            <Field>
              Yunanta Trisutrisno
              <p className="leading-6 text-gray-500">
                (Alumni peserta magang LPK COOP Indonesia Angk 25)
              </p>
            </Field>
          </Fields>
        </Flexbox>
      </Flexbox>
    </>
  )
}
