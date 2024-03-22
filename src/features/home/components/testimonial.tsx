import { Box, Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function HomeTestimonial() {
  const items = [
    {
      name: 'Dr. Sugiharto',
      position: 'Menteri BUMN (Periode 2004-2007)',
      description:
        'LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.',
      imageSrc: '/sponsor/other-sponsor-logo.png',
    },
    {
      name: 'Dra. Hj. Dewanti Rumpoko',
      position: 'Walikota Batu',
      description:
        'Sistem industri pertanian organik dan ramah lingkungan yang ada di kebun Furusato, diharapkan bisa dikembangkan di tempat lainnya yang ada di Kota Batu. Karena terbukti telah dapat bersaing dengan produk luar di pasar domestik.',
      imageSrc: '/sponsor/other-sponsor-logo.png',
    },
    {
      name: 'Dra. Hj. Dewanti Rumpokoo',
      position: 'Menteri BUMN (Periode 2004-2007)',
      description:
        'LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.',
      imageSrc: '/sponsor/other-sponsor-logo.png',
    },
  ]
  return (
    <Section>
      <Flexbox align="normal" justify="normal" flow="col" gap="2xl">
        <SectionTitle title="What People are Saying">
          Discover what others have to say about their experiences with us.
        </SectionTitle>
        <div className="grid grid-flow-col gap-12 overflow-hidden hover:overflow-auto">
          {items.map((item) => (
            <div key={item.name} className="relative min-h-full w-[450px] p-8">
              <Box withBorder>
                <Flexbox align="end" justify="between">
                  <div className="mb-3">
                    <Image
                      width={46}
                      height={95}
                      src="/quotation-mark.svg"
                      alt="quotation-mark-coop-indonesia"
                    />
                  </div>
                  <div className="h-[100px] w-[100px] overflow-hidden rounded-full bg-gray-600">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-auto w-full"
                      src={item.imageSrc}
                      alt={item.name}
                    />
                  </div>
                </Flexbox>
                <Typo size="xl" color="gray-900" fontWeight="bold">
                  {item.name}
                </Typo>
                <Typo size="md">{item.position}</Typo>
                <Typo size="md">{item.description}</Typo>
              </Box>
              <div className="absolute bottom-0 left-0 -z-10 h-60 w-60 rounded-xl bg-gray-50" />
            </div>
          ))}
        </div>
      </Flexbox>
    </Section>
  )
}
