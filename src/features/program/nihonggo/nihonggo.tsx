import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function Nihonggo() {
  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Program Sekolah Bahasa"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox align="normal" flow="col" gap="2xl">
          <div className="mx-auto w-[460px]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src="/nihonggo/nihonggo-image-1.svg"
              alt="nihonggo-image-1-coop-indonesia"
            />
          </div>
          <Typo size="lg">
            Program Sekolah Bahasa Jepang atau Nihonggo Gakko (sekolah Bahasa
            Jepang Mandiri) merupakan peluang bagi Masyarakat Indonesia yang
            berminat mempelajari secara langsung budaya dan bahasa Jepang di
            Negeri Sakura, yang kemudian dapat dilanjutkan dengan peluang
            bekerja di Perusahaan Jepang sesuai minat yang diinginkan.
          </Typo>
          <Flexbox flow="col" gap="xs" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              Kelebihan Program
            </Typo>
            <Markdown>
              Mendapatkan jaminan bekerja paruh waktu (Part time) atau Arubaito
              oleh Sekolah Bahasa dengan gaji sesuai Upah Minimal (UMP).
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              Persyaratan Calon Siswa
            </Typo>
            <Markdown>
              {`
  1. Lulus Ujian N-5, atau sederajat (sertifikasi kursus bahasa jepang)
  2. Usia minimal 18 tahun
  3. Pendidikan: Lulus SMA/SMK sederajat
  4. FIT Medical Check Up test
  5. Mendapatkan garansi pembiayaan dari Orang Tua/Wali`}
            </Markdown>
          </Flexbox>
          <Flexbox flow="col" gap="xs" align="normal">
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              Persyaratan Calon Siswa
            </Typo>
            <Markdown>
              {`1. Softcopy KTP, Kartu Keluarga, Akte Lahir
2. Softcopy Passfoto (latar belakang Putih)
3. Softcopy Ijazah : SD, SMP, SMA/SMK Sederajat, (S1 Optional)
4. Sertifikasi lembaga kursus Bahasa Jepang atau Sertifikat N-5 (asli dan softcopy)
5. Surat pernyataan bermaterai kesediaan orang tua/wali sebagai penjamin calon siswa(i)
6. Surat Keterangan Kesehatan (Medical Check Up)

)softcopy = dikirim via email ke email: **coopindonesia@gmail.com**<br/>
Subject: **Program Sekolah Bahasa Jepang**

<br/>
Rep Office:
**LPK COOP Indonesia**<br/>
Wisma 46 Kota BNI, Lantai 50, Jl. Jend Sudirman Kav. 1, Jakarta 10220<br/>
Tel. +62 21 5748879, 5748845<br/>
Fax. +62 21 5748888<br/>
Email: tokyotaiseigakuin@gmail.com<br/>
`}
            </Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
