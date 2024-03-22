import { Box, Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function HomeTestimonial() {
  return (
    <Section>
      <Flexbox align="normal" justify="normal" flow="col" gap="2xl">
        <SectionTitle title="What People are Saying">
          Discover what others have to say about their experiences with us.
        </SectionTitle>
        <div className="grid grid-flow-col gap-12">
          <div className="relative w-[450px] p-8">
            <Box withBorder>
              <Flexbox align="end" justify="between">
                <div className="mb-3">
                  <Image
                    width={46}
                    height={95}
                    className="object-contain"
                    src="/quotation-mark.svg"
                    alt="fursato-logo-coop-indonesia"
                  />
                </div>
                <div className="h-[100px] w-[100px] overflow-hidden rounded-full bg-gray-600">
                  <Image
                    width={315}
                    height={184}
                    className="object-contain"
                    src="/sponsor/other-sponsor-logo.png"
                    alt="fursato-logo-coop-indonesia"
                  />
                </div>
              </Flexbox>
              <Typo size="xl" color="gray-900" fontWeight="bold">
                Dr. Sugiharto
              </Typo>
              <Typo size="md">Menteri BUMN (Periode 2004-2007)</Typo>
              <Typo size="md">
                LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara
                Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi
                peluang bagi pemuda(i) Indonesia untuk ditempatkan pada
                perusahaan-perusahaan di Jepang untuk mengikuti program
                pemagangan dalam rangka meningkatkan kualitas dan kompetensi
                diri.
              </Typo>
            </Box>
            <div className="absolute bottom-0 left-0 -z-10 h-60 w-60 rounded-xl bg-gray-50" />
          </div>
          <div className="relative w-[450px] p-8">
            <Box withBorder>
              <Flexbox align="end" justify="between">
                <div className="mb-3">
                  <Image
                    width={46}
                    height={95}
                    className="object-contain"
                    src="/quotation-mark.svg"
                    alt="fursato-logo-coop-indonesia"
                  />
                </div>
                <div className="h-[100px] w-[100px] overflow-hidden rounded-full bg-gray-600">
                  <Image
                    width={315}
                    height={184}
                    className="object-contain"
                    src="/sponsor/other-sponsor-logo.png"
                    alt="fursato-logo-coop-indonesia"
                  />
                </div>
              </Flexbox>
              <Typo size="xl" color="gray-900" fontWeight="bold">
                Dr. Sugiharto
              </Typo>
              <Typo size="md">Menteri BUMN (Periode 2004-2007)</Typo>
              <Typo size="md">
                LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara
                Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi
                peluang bagi pemuda(i) Indonesia untuk ditempatkan pada
                perusahaan-perusahaan di Jepang untuk mengikuti program
                pemagangan dalam rangka meningkatkan kualitas dan kompetensi
                diri.
              </Typo>
            </Box>
            <div className="absolute bottom-0 left-0 -z-10 h-60 w-60 rounded-xl bg-gray-50" />
          </div>
          <div className="relative w-[450px] p-8">
            <Box withBorder>
              <Flexbox align="end" justify="between">
                <div className="mb-3">
                  <Image
                    width={46}
                    height={95}
                    className="object-contain"
                    src="/quotation-mark.svg"
                    alt="fursato-logo-coop-indonesia"
                  />
                </div>
                <div className="h-[100px] w-[100px] overflow-hidden rounded-full bg-gray-600">
                  <Image
                    width={315}
                    height={184}
                    className="object-contain"
                    src="/sponsor/other-sponsor-logo.png"
                    alt="fursato-logo-coop-indonesia"
                  />
                </div>
              </Flexbox>
              <Typo size="xl" color="gray-900" fontWeight="bold">
                Dr. Sugiharto
              </Typo>
              <Typo size="md">Menteri BUMN (Periode 2004-2007)</Typo>
              <Typo size="md">
                LPK COOP Indonesia sebagai salah satu Lembaga Penyelenggara
                Pemagangan ke Luar Negeri atau Sending Organization (SO) memberi
                peluang bagi pemuda(i) Indonesia untuk ditempatkan pada
                perusahaan-perusahaan di Jepang untuk mengikuti program
                pemagangan dalam rangka meningkatkan kualitas dan kompetensi
                diri.
              </Typo>
            </Box>
            <div className="absolute bottom-0 left-0 -z-10 h-60 w-60 rounded-xl bg-gray-50" />
          </div>
        </div>
      </Flexbox>
    </Section>
  )
}
