import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function InternshipEducationalMaterial() {
  const internshipEducationalMaterial = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Materi Pendidikan & Pelatihan',
    image: {
      src: '/program/educational-material-image-1.svg',
      alt: 'educational-material-image-1-coop-indonesia',
    },
    contents: [
      {
        title: 'A. Bahasa Jepang (60%):',
        body: "Tata Bahasa, Percakapan, Pendengaran. Modul Pembelajaran LPK COOP Indonesia disadur dari Minna No Nihongo 1 & 2, dan Pembelajaran secara Visual, menggunakan Aplikasi 'Gakken Nihongo 4me' untuk mencapai target Kemampuan Bahasa Jepang Level setara N4.",
      },
      {
        title: 'B. Fisik, Mental dan Disiplin (20%):',
        body: 'Fisik (Lari, push up, pull up, sit up, shuttle run), pendidikan cinta tanah air, keselamatan kerja/bencana, pembentukan karekter, kerohanian, mentoring, keterampilan kerja.',
      },
      {
        title: 'C. Budaya (10%):',
        body: 'Sikap, budaya, tata aturan kehidupan masyarakat Jepang.',
      },
      {
        title: 'D. Kewirausahaan (10%):',
        body: 'Perencanaan Usaha Mandiri, Pengenalan Koperasi, Pengelolaan keuangan sederhana.',
      },
    ],
  }

  const { info, title, image, contents } = internshipEducationalMaterial

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="2xl" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {title}
          </Typo>
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="mx-auto max-w-[17.5rem] shrink-0">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src={image.src}
                alt={image.alt}
              />
            </div>
            <Flexbox flow="col" gap="lg">
              {contents.map((content, index) => (
                <Flexbox key={index} flow="col" gap="xs" align="normal">
                  <Typo size="lg" fontWeight="bold">
                    {content.title}
                  </Typo>
                  <Typo size="lg">{content.body}</Typo>
                </Flexbox>
              ))}
            </Flexbox>
          </div>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
