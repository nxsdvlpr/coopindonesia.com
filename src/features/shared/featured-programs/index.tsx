import { Flexbox, Section, SectionTitle } from '@/nui'
import Card from './components/card'

export default function FeaturedPrograms() {
  return (
    <Section>
      <Flexbox flow="col" gap="2xl">
        <SectionTitle title="Featured Programs">
          LPK Coop Indonesia's top choice programs
        </SectionTitle>

        <Flexbox align="start" gap="xl">
          <Card
            title="Pemagangan ke Jepang"
            src="/featured-programs/image-1.svg"
            alt="hero-image-coop-indonesia"
          >
            LPK COOP Indonesia melakukan proses rekrutmen calon peserta sampai
            pelaksanaan pendidikan dan pelatihan pra-penempatan peserta di
            Jepang
          </Card>
          <Card
            title="Sekolah Bahasa"
            src="/featured-programs/image-2.svg"
            alt="hero-image-coop-indonesia"
          >
            Nihonggo Gakko untuk mempelajari secara langsung budaya dan bahasa
            Jepang, dapat dilanjutkan dengan bekerja di perusahaan Jepang.
          </Card>
          <Card
            title="Program Usaha Mandiri"
            src="/featured-programs/image-3.svg"
            alt="hero-image-coop-indonesia"
          >
            Kegiatan Pasca Magang untuk memfasilitasi para peserta yang telah
            selesai mengikuti program magang di Jepang dan kembali ke Tanah Air.
          </Card>
        </Flexbox>
      </Flexbox>
    </Section>
  )
}
