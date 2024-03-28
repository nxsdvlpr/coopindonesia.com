import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipTermsConditions() {
  const internshipTermsConditions = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Syarat dan Ketentuan',
    termsConditions: {
      title: 'Syarat & Ketentuan',
      body: `Merupakan kegiatan seleksi yang diadakan langsung oleh Perusahaan Penerima dari Jepang untuk mencari Calon Peserta yang telah melewati tahap **Pra Seleksi COOP Indonesia**. \n\n1. Tamatan SMK/Sederajat \n\n2. Lulus Ujian Kemampuan Bahasa Jepang Ver. LPK COOP Indonesia \n\n3. Pengalaman kerja (minimal 1 tahun) \n\n4. Usia 19 s.d 27 tahun (atau sesuai kebutuhan lembaga pengirim)\n\n5. Tidak Pernah Ke Jepang melalui Program apapun. \n\n6. Ketentuan Fisik, tidak : cacat, bertato atau bekas tato, tindik/bekas tindik, patah tulang, tuli, hernia, penyakit kulit, buta warna, bekas operasi tertentu.\n\n7. Tinggi badan minimal 160 cm (Pria) dan 150 (Wanita), berat badan proporsional.\n\n8. Tes Ketahanan Fisik (Lari, Sit up, Push up, Pull up, Shuttle Run)\n\n9. Tes psikologi, IQ, Akademis dan Matematika\n\n10. Wawancara tentang wawasan, pengetahuan umum, pengertian program, performance dll.\n\n11. Kesehatan (Medical Check Up) meliputi : pemeriksaan darah, urine, mata, feses, paru-paru, jantung, narkoba, hepatitis, HIV/AIDS, dll.`,
    },
  }

  const { info, title, termsConditions } = internshipTermsConditions

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="2xl">
          <div className="mx-auto shrink-0 lg:w-[28.75rem]">
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
            <Typo size="2xl" fontWeight="bold" color="gray-900">
              {termsConditions.title}
            </Typo>
            <Markdown size="lg">{termsConditions.body}</Markdown>
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
