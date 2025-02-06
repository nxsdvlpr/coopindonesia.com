import { aboutOrganizationStructure } from '@/app/[locale]/api/about'
import { Field, Fields, Flexbox, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import ContactInfo from './contact-info'

export default function Development() {
  const t = useTranslations()
  const { title, members } = aboutOrganizationStructure.development

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          {t('aboutPage.aboutOrganizationStructure.development.title')}
        </Typo>
      </div>
      <Flexbox flow="col" gap="xl">
        <ContactInfo
          src={
            t.raw('aboutPage.aboutOrganizationStructure.development.members')[0]
              .src
          }
          name={
            t.raw('aboutPage.aboutOrganizationStructure.development.members')[0]
              .name
          }
          position={
            t.raw('aboutPage.aboutOrganizationStructure.development.members')[0]
              .position
          }
        />
        <div className="m-auto max-w-md">
          <Fields>
            {t
              .raw('aboutPage.aboutOrganizationStructure.development.members')
              .slice(1)
              .map((member: any, index: number) => (
                <Field key={index}>
                  <strong>{member.name}</strong>
                  <p className="pb-2 text-gray-500">{member.additionalInfo}</p>
                </Field>
              ))}
          </Fields>
        </div>
      </Flexbox>
    </>
  )
}
