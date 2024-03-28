import { Field, Fields, Flexbox, Typo } from '@/nui'
import OrganizationStructureContactInfo from './contact-info'

export default function OrganizationStructureHeadOffice() {
  return (
    <>
      <div className="text-center">
        <Typo size="2xl" color="gray-900" fontWeight="bold">
          Kantor Pusat
        </Typo>
      </div>
      <div className="flex flex-col lg:flex-row">
        <OrganizationStructureContactInfo
          name="Leila Djawas"
          position="Advisor"
        />
        <OrganizationStructureContactInfo
          name="Selvy Rahmika, A.Ma S.Kom"
          position="Personalia(HRD)"
        />
        <OrganizationStructureContactInfo
          name="Sandy B.Y Bangapadang, S.H.,"
          position="Legal Advisor"
        />
      </div>
      <div className="grid gap-y-8 lg:grid-cols-2">
        <Flexbox align="normal" flow="col" gap="2xl">
          <Fields label=" Finance and Accounting:">
            <Field>Nensi Audika B., SE.</Field>
            <Field>Sholikin, SE., MMSi.</Field>
          </Fields>
          <Fields label="General Affair:">
            <Field>Misiran</Field>
            <Field>Muhammad Nur</Field>
          </Fields>
        </Flexbox>
        <Fields label="Corporate Secretary:">
          <Field>
            Liska Maharani
            <p className="leading-6 text-gray-500">
              (Alumni Peserta Pemagangan Jepang)
            </p>
          </Field>
          <Field>
            Yunita Wahyu Aryani, A.Ma
            <p className="leading-6 text-gray-500">
              (Alumni LPK COOP Indonesia Angk 13, JLPT N3)
            </p>
          </Field>
          <Field>Ragilia Farda Karima, A.Md</Field>
          <Field>Winairoh, S.Tr.Ds.</Field>
          <Field>Nurul Zia Aida, S.Pd (JLPT N4)</Field>
        </Fields>
      </div>
    </>
  )
}
