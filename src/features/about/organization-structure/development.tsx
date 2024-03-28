import { Field, Fields, Flexbox, Typo } from '@/nui'
import OrganizationStructureContactInfo from './contact-info'

export default function OrganizationStructureDevelopment() {
  return (
    <div className="flex flex-col gap-12">
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          Departemen Pengembangan Usaha
        </Typo>
      </div>
      <Flexbox flow="col" gap="xl">
        <OrganizationStructureContactInfo
          name="Cristian Ade Candra., S.T,. M.T"
          position="Direktur"
        />
        <div className="m-auto max-w-md">
          <Fields>
            <Field>
              <strong>Naldy Kostiyandi, S.Pd.</strong>
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, Alumni Tokyo Gakugei University - Japan, JLPT N2)
              </p>
            </Field>
            <div className="h-2" />
            <Field>
              <strong>Ristiawan Hidayat, S.Pd.</strong>
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, Alumni Osaka Gaigo Gakuin, JLPT N2)
              </p>
            </Field>
          </Fields>
        </div>
      </Flexbox>
    </div>
  )
}
