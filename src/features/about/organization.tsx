import { aboutOrganizationDataStatic } from '@/app/api/about'
import { Box, Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { AskedQuestion, Banner, Testimonial } from '../shared'
import { Menu } from '../shared/menu'

export default function Organization() {
  const { info, title, subtitle, addresses, office } =
    aboutOrganizationDataStatic

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Markdown size="lg">{subtitle}</Markdown>
      </Section>
      <Section>
        <Flexbox flow="col" gap="4xl">
          <Flexbox flow="col" gap="2xl">
            {addresses.map((address, index) => (
              <Flexbox flow="col" gap="lg" key={index}>
                <Typo size="xl" fontWeight="bold" color="gray-900">
                  {address.title}
                </Typo>
                <iframe
                  className="h-[15.25rem] w-full overflow-hidden rounded-lg focus:outline-none lg:h-[18.75rem] lg:w-[40rem]"
                  src={address.link}
                  loading="lazy"
                ></iframe>
              </Flexbox>
            ))}
          </Flexbox>
          <Flexbox flow="col" gap="lg">
            <Typo size="xl" fontWeight="bold" color="gray-900">
              {office.title}
            </Typo>
            <div className="grid content-between gap-8 lg:grid-cols-3 lg:gap-12">
              {office.addresses.map((item, index) => (
                <Box key={index} withBorder>
                  <Flexbox flow="col" gap="md" align="normal">
                    <Flexbox flow="col" gap="2xs" align="normal">
                      <Typo size="md" fontWeight="bold" color="gray-900">
                        {item.city}
                      </Typo>
                      <Typo color="gray-700">{item.address}</Typo>
                    </Flexbox>
                    <Flexbox flow="col" gap="2xs" align="normal">
                      {item.tel && (
                        <Typo color="gray-700">Tel. {item.tel}</Typo>
                      )}
                      {item.fax && (
                        <Typo color="gray-700">Fax. {item.fax}</Typo>
                      )}
                      {item.hp && <Typo color="gray-700">Hp. {item.hp}</Typo>}
                      {item.email && (
                        <Typo color="gray-700">Email : {item.email}</Typo>
                      )}
                    </Flexbox>
                  </Flexbox>
                </Box>
              ))}
            </div>
          </Flexbox>
        </Flexbox>
      </Section>
      <Menu showMenuAbout borderBottom />
      <Testimonial />
      <AskedQuestion />
      <Banner />
    </>
  )
}
