import { Box, Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import AskedQuestion from '../shared/asked-question'
import Banner from '../shared/banner'
import FeaturedPrograms from '../shared/featured-programs'

export default function Organization() {
  const organization = {
    title: 'Organization',
    subtitle: ` LPK COOP Indonesia memiliki jaringan organisasi di Indonesia dan juga
    kantor perwakilan di Jepang.`,
    addresses: [
      {
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1901050107867!2d106.80672617574834!3d-6.238656761092927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1c36e387eb9%3A0x4aaca7ad92e87fa8!2sLPK%20COOP%20Indonesia!5e0!3m2!1sid!2sid!4v1711291791793!5m2!1sid!2sid',
      },
      {
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1901050107867!2d106.80672617574834!3d-6.238656761092927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1c36e387eb9%3A0x4aaca7ad92e87fa8!2sLPK%20COOP%20Indonesia!5e0!3m2!1sid!2sid!4v1711291791793!5m2!1sid!2sid',
      },
    ],
    officeLocations: [
      {
        city: 'TOKYO',
        address: '1-47-5, Hachigasaki Matsudo-shi, Chiba 270-0023 Japan',
        tel: '+8147-710-5622',
        fax: '+813-6369-4183',
        hp: '+8190-5516-6743',
        email: 'yamamoto@midas-japan.com',
      },
      {
        city: 'OSAKA',
        address: '1735-9 Shindachi Ichiba Sennan Shi Osaka Fu JAPAN 590-0504',
        tel: '+81 72-4476-976',
        fax: '+81 72-4476-976',
        hp: '+81 80-4844-7883',
        email: 'herizal@haifarabbani.com',
      },
      {
        city: 'AICHI',
        address: '4-11-16, Imure Minami, Toyohashi, Aichi-ken, JAPAN 440-0835',
        hp: '+81 80-4224-1668',
        email: 'devi@ej-support.net',
      },
    ],
  }

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="ABOUT US"
          title={organization.title}
        >
          <Markdown>{organization.subtitle}</Markdown>
        </SectionTitle>
      </Section>
      <Section>
        <Flexbox flow="col" gap="4xl">
          <Flexbox flow="col" gap="2xl">
            {organization.addresses.map((address, index) => (
              <iframe
                key={index}
                className="overflow-hidden rounded-lg"
                src={address.link}
                width="640"
                height="252"
                loading="lazy"
              ></iframe>
            ))}
          </Flexbox>
          <Flexbox flow="col" gap="lg">
            <Typo size="xl" fontWeight="bold" color="gray-900">
              Kantor Perwakilan Jepang
            </Typo>
            <div className="grid grid-cols-3 gap-12">
              {organization.officeLocations.map((officeLocation, index) => (
                <Box key={index} withBorder>
                  <Flexbox flow="col" gap="md" align="normal">
                    <Flexbox flow="col" gap="2xs" align="normal">
                      <Typo size="md" fontWeight="bold" color="gray-900">
                        {officeLocation.city}
                      </Typo>
                      <Typo color="gray-700">{officeLocation.address}</Typo>
                    </Flexbox>
                    <Flexbox flow="col" gap="2xs" align="normal">
                      {officeLocation.tel && (
                        <Typo color="gray-700">Tel. {officeLocation.tel}</Typo>
                      )}
                      {officeLocation.fax && (
                        <Typo color="gray-700">Fax. {officeLocation.fax}</Typo>
                      )}
                      {officeLocation.hp && (
                        <Typo color="gray-700">Hp. {officeLocation.hp}</Typo>
                      )}
                      {officeLocation.email && (
                        <Typo color="gray-700">
                          Email : {officeLocation.email}
                        </Typo>
                      )}
                    </Flexbox>
                  </Flexbox>
                </Box>
              ))}
            </div>
          </Flexbox>
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
