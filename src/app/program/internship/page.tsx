import AskedQuestion from '@/features/shared/asked-question'
import Banner from '@/features/shared/banner'
import FeaturedPrograms from '@/features/shared/featured-programs'
import { Flexbox, Markdown, Section, SectionTitle } from '@/nui'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Program',
  description: 'LPK Coop Indonesia - Program',
}

export default function InternshipPage() {
  const internship1 = `Program penempatan peserta magang ke Jepang merupakan salah satu program dari Kementerian Ketenagakerjaan RI dibawah Direktorat Bina Lattas (Pembinaan, Pelatihan dan Produktivitas) bekerja sama dengan Pemerintah Jepang, yaitu dibawah JITCO (Japan International Training Cooperation Organization). Progam magang (techinal intern training program) yang dilakukan berupa pelatihan teknis, teknologi, dan pengetahuan.

  LPK COOP Indonesia salah satu lembaga Penyelenggaraan Pemagangan ke Luar Negeri berdasarkan Keputusan Dirjen Pembinaan Pelatihan dan Produktivitas Nomor: KEP. 140/LATTAS/IV/2016 dan Keputusan Dinas Tenaga Kerja dan Transmigrasi Kabupaten Sumedang Nomor. KEP.563/56/Bid.PPTK/2016
  `

  const internship2 = `Saat ini LPK COOP Indonesia telah menempatkan 2000 peserta magang di berbagai bidang antara lain: Kontruksi: Pembuatan rangka bangunan (tekking), Interior Design (pembuatan rumah), Tukang Kayu, Tukang Batu (pengecoran), kegiatan kontruksi jalan/jembatan, Pemasangan Pipa, Pengecatan (Painting), dan kegiatan kontruksi umum lainnya, Pengelasan, Pengecatan Logam, Manufaktur: Permesinan, Mesin Press, Mesin Bubut, Pembuatan Produk Plastik/logam; Industri Olahan Makanan, Perikanan: Pabrik Pengolahan Ikan, Budidaya Oyster, Peternakan: Susu Sapi, Industri Ayam Potong, Pertanian: Sayur mayur, Penanaman Bunga, Pertanian Penanaman dan bidang lainnya dengan lokasi penempatan di Tokyo, Chiba, Aichi, Gifu, Oita, Gunma, Tochigi, Miyagi, Hiroshima, Kanagawa, Shizuoka, Ibaraki, Kagoshima, Toyama, Kyoto, dll
  LPK COOP Indonesia melakukan proses rekrutmen calon peserta sampai pelaksanaan pendidikan dan pelatihan pra-penempatan peserta di Jepang yang telah teruji sesuai dengan kebutuhan yang diperlukan oleh perusahaan-perusahaan di Jepang. Adapun materi Pendidikan dan Pelatihan meliputi: Bahasa dan Budaya Jepang, Fisik, Mental, Disiplin dan Pembentukan Karakter (Character Building), Pendidikan Kerohanian, Kewirausahaan dan Pelatihan teknis menyesuaikan bidang pemagangan
  `

  const internship3 = `Dalam rancangan kerangka kerja sama internasional antara Jepang dan Indonesia, LPK COOP Indonesia juga mempersiapkan program kerja sama pasca magang bagi pemuda Indonesia yang telah menyelesaikan program magang di Jepang. Progam ini menjadikan peserta untuk dapat mengembangkan usaha mandiri secara individual atau kelompok sesuai dengan pengalaman yang telah didapatkan di Jepang. Pengembangan usaha mandiri dilaksanakan bersama jejaring usaha Yayasan COOP Indonesia yang berada di berbagai daerah di Indonesia. Yayasan COOP Indonesia bekerja sama dengan pengusaha lokal maupun dan pengusaha Jepang dalam mendukung pengembangan usaha mandiri dari para peserta.
  Yayasan COOP Indonesia percaya bahwa kerangka pemagangan dan kerja sama pasca magang dapat memberi manfaat, antara lain:

  * Peserta magang dapat melanjutkan karirnya dengan membangun usaha di Indonesia berdasarkan pengalaman yang didapat di Jepang.
  * Peserta magang dapat melakukan pengetahuan teknis dan manajemen untuk mengembangkan usahanya di Indonesia
  * Perusahaan penerima magang Jepang memiliki agen penghubung dalam rangka pengembangan usaha atau jaringan bisnis di Indonesia yang dikembangkan setelah peserta magang kembali ke Indonesia.
  `

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Tentang Magang"
        >
          LPK COOP Indonesia didirikan sejak April 2012, sebagai salah satu
          Sending Organization (SO) untuk pelaksanaan program magang (technical
          intern trainees) ke Jepang, LPK COOP Indonesia memberi peluang bagi
          pemuda(i) Indonesia untuk di tempatkan pada perusahaan-perusahaan di
          Jepang.
        </SectionTitle>
      </Section>
      <Section>
        <div className="m-auto flex max-w-3xl flex-col gap-12 px-10">
          <div className="mx-auto w-[480px]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src="/program/internship/program-internship-image-1.svg"
              alt="program-internship-image-1-coop-indonesia"
            />
          </div>
          <Markdown>{internship1}</Markdown>
          <Flexbox>
            <div className="w-[376px] overflow-hidden rounded-2xl">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/program/internship/program-internship-image-2.png"
                alt="program-internship-image-2-coop-indonesia"
              />
            </div>
            <div className="w-[376px] overflow-hidden rounded-2xl">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/program/internship/program-internship-image-3.png"
                alt="pprogram-internship-image-3-coop-indonesia"
              />
            </div>
          </Flexbox>
          <Markdown>{internship2}</Markdown>
          <Flexbox>
            <div className="w-[235px] overflow-hidden rounded-2xl">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/program/internship/program-internship-image-4.png"
                alt="program-internship-image-4-coop-indonesia"
              />
            </div>
            <div className="w-[235px] overflow-hidden rounded-2xl">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/program/internship/program-internship-image-5.png"
                alt="pprogram-internship-image-5-coop-indonesia"
              />
            </div>
            <div className="w-[235px] overflow-hidden rounded-2xl">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/program/internship/program-internship-image-6.png"
                alt="pprogram-internship-image-6-coop-indonesia"
              />
            </div>
          </Flexbox>
          <Markdown>{internship3}</Markdown>
        </div>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
