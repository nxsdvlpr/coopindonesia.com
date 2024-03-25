import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipTermsConditions() {
  const termsCondition = `Merupakan kegiatan seleksi yang diadakan langsung oleh Perusahaan Penerima dari Jepang untuk mencari Calon Peserta yang telah melewati tahap **Pra Seleksi COOP Indonesia**.
  1. Tamatan SMK/Sederajat
  2. Lulus Ujian Kemampuan Bahasa Jepang Ver. LPK COOP Indonesia
  3. Pengalaman kerja (minimal 1 tahun)
  4. Usia 19 s.d 27 tahun (atau sesuai kebutuhan lembaga pengirim)
  5. Tidak Pernah Ke Jepang melalui Program apapun.
  6. Ketentuan Fisik, tidak : cacat, bertato atau bekas tato, tindik/bekas tindik, patah tulang, tuli, hernia, penyakit kulit, buta warna, bekas operasi tertentu.
  7. Tinggi badan minimal 160 cm (Pria) dan 150 (Wanita), berat badan proporsional.
  8. Tes Ketahanan Fisik (Lari, Sit up, Push up, Pull up, Shuttle Run)
  9. Tes psikologi, IQ, Akademis dan Matematika
  10. Wawancara tentang wawasan, pengetahuan umum, pengertian program, performance dll.
  11. Kesehatan (Medical Check Up) meliputi : pemeriksaan darah, urine, mata, feses, paru-paru, jantung, narkoba, hepatitis, HIV/AIDS, dll.`

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Syarat dan Ketentuan"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="2xl">
          <div className="mx-auto w-[28.75rem] shrink-0">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src="/program/terms-conditions-image-1.svg"
              alt="terms-conditions-image-1-coop-indonesia"
            />
          </div>
          <Flexbox flow="col" gap="none" align="normal">
            <Typo size="xl" fontWeight="bold" color="gray-900">
              Syarat & Ketentuan
            </Typo>
            <Markdown>{termsCondition}</Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
