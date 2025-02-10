import { Box, Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import { AskedQuestion, Banner, Testimonial } from '../shared'
import { Menu } from '../shared/menu'

export default function Organization() {
  const t = useTranslations()

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('aboutPage.aboutOrganization.info')}
          title={t('aboutPage.aboutOrganization.title')}
        />
      </Section>
      <Section maxWidth="sm">
        <Markdown size="lg">
          {t('aboutPage.aboutOrganization.subtitle')}
        </Markdown>
      </Section>
      <Section>
        <Flexbox flow="col" gap="4xl">
          <Flexbox flow="col" gap="2xl">
            {t
              .raw('aboutPage.aboutOrganization.addresses')
              .map((address: any, index: number) => (
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
              {t('aboutPage.aboutOrganization.office.title')}
            </Typo>
            <div className="grid content-between gap-8 lg:grid-cols-3 lg:gap-12">
              {t
                .raw('aboutPage.aboutOrganization.office.addresses')
                .map((item: any, index: number) => (
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
