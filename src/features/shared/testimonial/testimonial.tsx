import { Box, Flexbox, Icon, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'
import { testimonialStyle } from './testimonial.style'

export default function Testimonial() {
  const testimonial = {
    title: 'What People are Saying',
    subtitle:
      'Discover what others have to say about their experiences with us.',
    items: [
      {
        name: 'Dr. Sugiharto',
        position: 'Menteri BUMN (Periode 2004-2007)',
        description:
          'LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.',
        imageSrc: '',
      },
      {
        name: 'Dra. Hj. Dewanti Rumpoko',
        position: 'Walikota Batu',
        description:
          'Sistem industri pertanian organik dan ramah lingkungan yang ada di kebun Furusato, diharapkan bisa dikembangkan di tempat lainnya yang ada di Kota Batu. Karena terbukti telah dapat bersaing dengan produk luar di pasar domestik.',
        imageSrc: '',
      },
      {
        name: 'Dra. Hj. Dewanti Rumpokoo',
        position: 'Menteri BUMN (Periode 2004-2007)',
        description:
          'LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi peluang bagi pemuda(i) Indonesia untuk ditempatkan pada perusahaan-perusahaan di Jepang untuk mengikuti program pemagangan dalam rangka meningkatkan kualitas dan kompetensi diri.',
        imageSrc: '',
      },
    ],
  }

  const { wrapper, main, boxImage, background } = testimonialStyle()

  const { title, subtitle, items } = testimonial

  return (
    <Section>
      <Flexbox align="normal" justify="normal" flow="col" gap="2xl">
        <SectionTitle title={title}>{subtitle}</SectionTitle>
        <div className={wrapper()}>
          {items.map((item) => (
            <div key={item.name} className={main()}>
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
                  <div className={boxImage()}>
                    {item.imageSrc ? (
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                        src={item.imageSrc}
                        alt={item.name}
                      />
                    ) : (
                      <Icon size="xl" icon="lucide:user" />
                    )}
                  </div>
                </Flexbox>
                <Typo size="xl" color="gray-900" fontWeight="bold">
                  {item.name}
                </Typo>
                <Flexbox align="start" flow="col" gap="xs">
                  <Typo size="lg" color="gray-500">
                    {item.position}
                  </Typo>
                  <Typo size="lg">{item.description}</Typo>
                </Flexbox>
              </Box>
              <div className={background()} />
            </div>
          ))}
        </div>
      </Flexbox>
    </Section>
  )
}
