import { Flexbox, Section, SectionTitle } from '@/nui'
import Card from './components/card'

type FeaturedProgramsProps = {
  title?: string
  subtitle?: string
  variant?: 'none' | 'gray'
}

export default function FeaturedPrograms({
  title: programTitle = 'COOP Indonesia Programs',
  subtitle: programSubtitle = 'Discover more about our premier programs',
  variant,
}: FeaturedProgramsProps) {
  const featuredPrograms = {
    title: programTitle,
    subtitle: programSubtitle,
    programs: [
      {
        title: 'Pemagangan ke Jepang',
        src: '/featured-programs/image-1.svg',
        alt: 'hero-image-coop-indonesia',
        description:
          'LPK COOP Indonesia melakukan proses rekrutmen calon peserta sampai pelaksanaan pendidikan dan pelatihan pra-penempatan peserta di Jepang',
      },
      {
        title: 'Sekolah Bahasa',
        src: '/featured-programs/image-2.svg',
        alt: 'hero-image-coop-indonesia',
        description:
          'Nihonggo Gakko untuk mempelajari secara langsung budaya dan bahasa Jepang, dapat dilanjutkan dengan bekerja di perusahaan Jepang.',
      },
      {
        title: 'Program Usaha Mandiri',
        src: '/featured-programs/image-3.svg',
        alt: 'hero-image-coop-indonesia',
        description:
          'Kegiatan Pasca Magang untuk memfasilitasi para peserta yang telah selesai mengikuti program magang di Jepang dan kembali ke Tanah Air.',
      },
    ],
  }

  const { title, subtitle, programs } = featuredPrograms

  return (
    <Section variant={variant}>
      <Flexbox flow="col" gap="2xl">
        <SectionTitle title={title}>{subtitle}</SectionTitle>
        <div className="flex flex-col gap-8 lg:flex-row">
          {programs.map((program, index) => (
            <Card
              key={index}
              title={program.title}
              src={program.src}
              alt={program.alt}
            >
              {program.description}
            </Card>
          ))}
        </div>
      </Flexbox>
    </Section>
  )
}
