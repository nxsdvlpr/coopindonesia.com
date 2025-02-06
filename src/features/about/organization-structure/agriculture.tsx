import { aboutOrganizationStructure } from '@/app/[locale]/api/about'
import { Field, Fields, Flexbox, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import ContactInfo from './contact-info'

export default function Agriculture() {
  const t = useTranslations()
  const { title, members, supervisor } = aboutOrganizationStructure.agriculture

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          {t('aboutPage.aboutOrganizationStructure.agriculture.title')}
        </Typo>
      </div>
      <Flexbox flow="col" gap="xl">
        {t
          .raw('aboutPage.aboutOrganizationStructure.agriculture.members')
          .map((member: any, index: number) => (
            <ContactInfo
              key={index}
              name={member.name}
              position={member.position}
              src={member.src}
            >
              {member.additionalInfo}
            </ContactInfo>
          ))}
        <div className="w-full lg:w-auto">
          <Flexbox flow="col" gap="sm" align="start">
            <Fields
              label={t(
                'aboutPage.aboutOrganizationStructure.agriculture.supervisor.title'
              )}
            >
              {t
                .raw(
                  'aboutPage.aboutOrganizationStructure.agriculture.supervisor.members'
                )
                .map((supervisor: any, index: number) => (
                  <Field key={index}>
                    {supervisor.name}
                    <p className="text-gray-500">{supervisor.additionalInfo}</p>
                  </Field>
                ))}
            </Fields>
          </Flexbox>
          <Flexbox flow="col" gap="sm" align="start">
            <Fields
              label={t(
                'aboutPage.aboutOrganizationStructure.agriculture.adminAgriculture.title'
              )}
            >
              {t
                .raw(
                  'aboutPage.aboutOrganizationStructure.agriculture.adminAgriculture.members'
                )
                .map((adminAgriculture: any, index: number) => (
                  <Field key={index}>
                    {adminAgriculture.name}
                    <p className="text-gray-500">
                      {adminAgriculture.additionalInfo}
                    </p>
                  </Field>
                ))}
            </Fields>
          </Flexbox>
        </div>
      </Flexbox>
    </>
  )
}
