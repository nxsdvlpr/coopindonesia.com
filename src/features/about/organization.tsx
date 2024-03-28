import { Box, Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Link from 'next/link'
import { AskedQuestion, Banner, Testimonial } from '../shared'

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
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.632996718117!2d107.77067157499658!3d-6.93439249306553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c4a504ebf075%3A0x9d04b44207437717!2sPusdiklat%20Gerkopin!5e0!3m2!1sid!2sid!4v1711598791078!5m2!1sid!2sid',
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
            <Link href="https://maps.app.goo.gl/GLaRzWprDeo2HE7c6">test</Link>
            {organization.addresses.map((address, index) => (
              <iframe
                key={index}
                className="h-[15.25rem] w-full overflow-hidden rounded-lg focus:outline-none lg:h-[18.75rem] lg:w-[40rem]"
                src={address.link}
                loading="lazy"
              ></iframe>
            ))}
          </Flexbox>
          <Flexbox flow="col" gap="lg">
            <Typo size="xl" fontWeight="bold" color="gray-900">
              Kantor Perwakilan Jepang
            </Typo>
            <div className="grid content-between gap-8 lg:grid-cols-3 lg:gap-12">
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
      <Testimonial />
      <AskedQuestion />
      <Banner />
    </>
  )
}
