import { Field, Fields, Flexbox, Typo } from '@/nui'
import OrganizationStructureContactInfo from './contact-info'

export default function OrganizationStructureEducation() {
  return (
    <>
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          Departemen Pendidikan dan Pelatihan
        </Typo>
      </div>
      <Flexbox flow="col" gap="xl">
        <Flexbox justify="between" align="start">
          <OrganizationStructureContactInfo
            name="Irwan Ardiyanto"
            position="Direktur"
          >
            Alumni IM Japan Angk 37
          </OrganizationStructureContactInfo>
          <OrganizationStructureContactInfo
            name="Pupung Masitoh, S.S"
            position="Kepala Pusat Pendidikan dan Pelatihan"
          >
            Sarjana (S1) Sastra Jepang Universitas Gajah Mada, JLPT N2
          </OrganizationStructureContactInfo>
        </Flexbox>
        <div className="grid grid-cols-2 content-between">
          <Flexbox align="start" justify="between" flow="col" gap="xl">
            <Fields label="Hubungan Masyarakat:">
              <Field>Yusron Ahmadi</Field>
              <Field>Ahmad Sumarna, S, Sos.</Field>
            </Fields>
            <Fields label="Corporate Secretary:">
              <Field>Rizal Muhamad Dahlan, S.Ak</Field>
            </Fields>
          </Flexbox>
          <Flexbox align="start" justify="between" flow="col" gap="xl">
            <Fields label="Instruktur Fisik, Mental dan Kedisplinan:">
              <Field>Serma (Purn) Kasiyanto, S.Pd</Field>
              <Field>
                Bambang Heryawan
                <p className="leading-6 text-gray-500">
                  (Alumni LPK COOP Indonesia Angk 15, JLPT N3)
                </p>
              </Field>
            </Fields>
            <Fields label="General Affair:">
              <Field>Muhamad Taufik</Field>
            </Fields>
          </Flexbox>
        </div>
        <div className="w-full">
          <Fields label="Instruktur Bahasa dan Budaya Jepang:">
            <Field>
              Nur Rizki Adi Jourgia Abdillah, S.Pd.
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, Alumni Tokyo Gakugei University - Japan, JLPT N2)
              </p>
            </Field>
            <Field>
              Trisnawati Srimulyani, S.Pd.
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, Alumni Osaka Gaigo Gakuin, JLPT N2)
              </p>
            </Field>
            <Field>
              Devy Ramputy, S.Pd
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, JLPT N3)
              </p>
            </Field>
            <Field>
              Nida Siti Hanifah, S.Pd.
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Sekolah Tinggi Bahasa Asing Yapari - ABA Bandung,
                JLPT N3)
              </p>
            </Field>
            <Field>
              Yasmin Tamara, S. Pd
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, JLPT N3)
              </p>
            </Field>
            <Field>
              Tissa Putri Djayadipura, S.Pd
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, JLPT N3)
              </p>
            </Field>
            <Field>
              Rifa Aulia Husni Fadilla, S. Pd
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, JLPT N4)
              </p>
            </Field>
            <Field>
              Dewi Kiany, S.Pd
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, JLPT N3)
              </p>
            </Field>
            <Field>
              Omar Hafiz Shirazi, S.pd
              <p className="leading-6 text-gray-500">
                (Sarjana (S1) Pendidikan Bahasa Jepang Universitas Pendidikan
                Indonesia, JLPT N4)
              </p>
            </Field>
          </Fields>
        </div>
      </Flexbox>
    </>
  )
}
