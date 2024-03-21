import { Box, Button, Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export function HomeFeaturedPrograms() {
  return (
    <Section>
      <Flexbox flow="col" gap="2xl">
        <SectionTitle title="Featured Programs">
          LPK Coop Indonesia's top choice programs
        </SectionTitle>

        <Flexbox align="start" gap="xl">
          <Box withBorder>
            <Flexbox align="start" flow="col" gap="md">
              <div className="w-[314px]">
                <Image
                  width={315}
                  height={184}
                  src="/featured-programs/image-1.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
              <Flexbox align="start" flow="col" gap="xs">
                <Typo size="xl" color="gray-900">
                  Pemagangan ke Jepang
                </Typo>
                <Typo size="md">
                  LPK COOP Indonesia melakukan proses rekrutmen calon peserta
                  sampai pelaksanaan pendidikan dan pelatihan pra-penempatan
                  peserta di Jepang
                </Typo>
              </Flexbox>
              <Button>Pelajari</Button>
            </Flexbox>
          </Box>
          <Box withBorder>
            <Flexbox align="start" flow="col" gap="md">
              <div className="w-[314px]">
                <Image
                  width={315}
                  height={184}
                  src="/featured-programs/image-2.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
              <Flexbox align="start" flow="col" gap="xs">
                <Typo size="xl" color="gray-900">
                  Sekolah Bahasa
                </Typo>
                <Typo size="md">
                  Nihonggo Gakko untuk mempelajari secara langsung budaya dan
                  bahasa Jepang, dapat dilanjutkan dengan bekerja di perusahaan
                  Jepang.
                </Typo>
              </Flexbox>
              <Button>Pelajari</Button>
            </Flexbox>
          </Box>
          <Box withBorder>
            <Flexbox align="start" flow="col" gap="md">
              <div className="w-[314px]">
                <Image
                  width={315}
                  height={184}
                  src="/featured-programs/image-3.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
              <Flexbox align="start" flow="col" gap="xs">
                <Typo size="xl" color="gray-900">
                  Program Usaha Mandiri
                </Typo>
                <Typo size="md">
                  Kegiatan Pasca Magang untuk memfasilitasi para peserta yang
                  telah selesai mengikuti program magang di Jepang dan kembali
                  ke Tanah Air.
                </Typo>
              </Flexbox>
              <Button>Pelajari</Button>
            </Flexbox>
          </Box>
        </Flexbox>
      </Flexbox>
    </Section>
  )
}
