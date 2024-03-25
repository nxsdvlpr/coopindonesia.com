import AskedQuestion from '@/features/shared/asked-question'
import Banner from '@/features/shared/banner'
import FeaturedPrograms from '@/features/shared/featured-programs'
import { Box, Flexbox, Section, SectionTitle, Typo } from '@/nui'

export default function OrganizationPage() {
  return (
    <>
      <Section>
        <SectionTitle info="ABOUT US" title="Organization">
          LPK COOP Indonesia memiliki jaringan organisasi di Indonesia dan juga
          kantor perwakilan di Jepang.
        </SectionTitle>
      </Section>
      <Section>
        <Flexbox flow="col" gap="4xl">
          <Flexbox flow="col" gap="2xl">
            <iframe
              className="overflow-hidden rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1901050107867!2d106.80672617574834!3d-6.238656761092927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1c36e387eb9%3A0x4aaca7ad92e87fa8!2sLPK%20COOP%20Indonesia!5e0!3m2!1sid!2sid!4v1711291791793!5m2!1sid!2sid"
              width="640"
              height="252"
              loading="lazy"
            ></iframe>
            <iframe
              className="overflow-hidden rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1901050107867!2d106.80672617574834!3d-6.238656761092927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1c36e387eb9%3A0x4aaca7ad92e87fa8!2sLPK%20COOP%20Indonesia!5e0!3m2!1sid!2sid!4v1711291791793!5m2!1sid!2sid"
              width="640"
              height="252"
              loading="lazy"
            ></iframe>
          </Flexbox>
          <Flexbox flow="col" gap="lg">
            <Typo size="xl" fontWeight="bold" color="gray-900">
              Kantor Perwakilan Jepang
            </Typo>
            <Flexbox align="normal" justify="between">
              <Box withBorder>
                <Flexbox flow="col" gap="md" align="normal">
                  <Flexbox flow="col" gap="2xs" align="normal">
                    <Typo size="md" fontWeight="bold" color="gray-900">
                      TOKYO
                    </Typo>
                    <Typo color="gray-700">
                      1-47-5, Hachigasaki Matsudo-shi, Chiba 270-0023 Japan
                    </Typo>
                  </Flexbox>
                  <Flexbox flow="col" gap="2xs" align="normal">
                    <Typo color="gray-700">Tel. +8147-710-5622</Typo>
                    <Typo color="gray-700">Fax. +813-6369-4183</Typo>
                    <Typo color="gray-700">Hp. +8190-5516-6743</Typo>
                    <Typo color="gray-700">
                      Email : yamamoto@midas-japan.com
                    </Typo>
                  </Flexbox>
                </Flexbox>
              </Box>
              <Box withBorder>
                <Flexbox flow="col" gap="md" align="normal">
                  <Flexbox flow="col" gap="2xs" align="normal">
                    <Typo size="md" fontWeight="bold" color="gray-900">
                      OSAKA
                    </Typo>
                    <Typo color="gray-700">
                      1735-9 Shindachi Ichiba Sennan Shi Osaka Fu JAPAN 590-0504
                    </Typo>
                  </Flexbox>
                  <Flexbox flow="col" gap="2xs" align="normal">
                    <Typo color="gray-700">Tel. +81 72-4476-976</Typo>
                    <Typo color="gray-700">Fax. +81 72-4476-976</Typo>
                    <Typo color="gray-700">Hp . +81 80-4844-7883</Typo>
                    <Typo color="gray-700">
                      Email : herizal@haifarabbani.com
                    </Typo>
                  </Flexbox>
                </Flexbox>
              </Box>
              <Box withBorder>
                <Flexbox flow="col" gap="md" align="normal">
                  <Flexbox flow="col" gap="2xs" align="normal">
                    <Typo size="md" fontWeight="bold" color="gray-900">
                      AICHI
                    </Typo>
                    <Typo color="gray-700">
                      4-11-16, Imure Minami, Toyohashi, Aichi-ken, JAPAN
                      440-0835
                    </Typo>
                  </Flexbox>
                  <Flexbox flow="col" gap="2xs" align="normal">
                    <Typo color="gray-700">Hp . +81 80-4224-1668</Typo>
                    <Typo color="gray-700">Email : devi@ej-support.net</Typo>
                  </Flexbox>
                </Flexbox>
              </Box>
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
