import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipEducationalMaterial() {
  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Materi Pendidikan & Pelatihan"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="2xl" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            Materi Pendidikan & Pelatihan
          </Typo>
          <Flexbox justify="between" gap="2xl" align="start">
            <div className="w-[17.5rem] shrink-0">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/program/educational-material-image-1.svg"
                alt="educational-material-image-1-coop-indonesia"
              />
            </div>
            <Flexbox flow="col" gap="lg">
              <Flexbox flow="col" gap="xs" align="normal">
                <Typo size="lg" fontWeight="bold">
                  A. Bahasa Jepang (60%):
                </Typo>
                <Typo size="lg">
                  Tata Bahasa, Percakapan, Pendengaran. Modul Pembelajaran LPK
                  COOP Indonesia disadur dari Minna No Nihongo 1 & 2, dan
                  Pembelajaran secara Visual, menggunakan Aplikasi "Gakken
                  Nihongo 4me" untuk mencapai target Kemampuan Bahasa Jepang
                  Level setara N4.
                </Typo>
              </Flexbox>
              <Flexbox flow="col" gap="xs" align="normal">
                <Typo size="lg" fontWeight="bold">
                  B. Fisik, Mental dan Disiplin (20%):
                </Typo>
                <Typo size="lg">
                  Fisik (Lari, push up, pull up, sit up, shuttle run),
                  pendidikan cinta tanah air, keselamatan kerja/bencana,
                  pembentukan karekter, kerohanian, mentoring, keterampilan
                  kerja.
                </Typo>
              </Flexbox>
              <Flexbox flow="col" gap="xs" align="normal">
                <Typo size="lg" fontWeight="bold">
                  C. Budaya (10%):
                </Typo>
                <Typo size="lg">
                  Sikap, budaya, tata aturan kehidupan masyarakat Jepang.
                </Typo>
              </Flexbox>
              <Flexbox flow="col" gap="xs" align="normal">
                <Typo size="lg" fontWeight="bold">
                  D.Kewirausahaan (10%):
                </Typo>
                <Typo size="lg">
                  Perencanaan Usaha Mandiri, Pengenalan Koperasi, Pengelolaan
                  keuangan sederhana.
                </Typo>
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
