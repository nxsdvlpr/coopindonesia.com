import AskedQuestion from '@/features/shared/asked-question'
import Banner from '@/features/shared/banner'
import FeaturedPrograms from '@/features/shared/featured-programs'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'

export default function AtaGlancePage() {
  return (
    <>
      <Section>
        <SectionTitle info="ABOUT US" title="At a Glance">
          <strong>LPK COOP Indonesia</strong> sebagai salah satu Lembaga
          Penyelenggara Pemagangan ke Luar Negeri atau{' '}
          <strong>Sending Organization (SO)</strong> memberi peluang bagi
          pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di
          Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan
          kualitas dan kompetensi diri.
        </SectionTitle>
      </Section>
      <Section>
        <div className="px-10">
          <Flexbox>
            <Typo>
              LPK COOP Indonesia melakukan proses rekrutmen calon peserta sampai
              pelaksanaan pendidikan dan pelatihan pra-penempatan peserta di
              Jepang yang telah teruji sesuai dengan kebutuhan yang diperlukan
              oleh perusahaan-perusahaan di Jepang yang meliputi: Bahasa dan
              Budaya Jepang, Fisik, Mental, Disiplin dan Pembentukan Karakter
              (Character Building), Pendidikan Kerohanian, Kewirausahaan dan
              Pelatihan teknis menyesuaikan bidang pemagangan. Dalam rancangan
              kerangka kerja sama internasional antara Jepang dan Indonesia, LPK
              COOP Indonesia telah membuka kantor perwakilan di Tokyo, Osaka dan
              Aichi guna memperlancar pelaksanaan program penempatan peserta
              pemagangan di Jepang. Dan saat ini kami telah menempatkan sekitar
              2,500 peserta pemagangan ke beberapa Perusahaan di Jepang di
              berbagai bidang antara lain: Kontruksi, Keperawatan, Pengelasan,
              Pertanian, Perikanan, Peternakan, Manufaktur, Industri Olahan
              Makanan, Tata Operasi Darat (Ground Handling), dan lain
              sebagainya.
            </Typo>
          </Flexbox>
        </div>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
