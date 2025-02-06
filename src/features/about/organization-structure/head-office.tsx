import { aboutOrganizationStructure } from '@/app/[locale]/api/about'
import { Field, Fields, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import ContactInfo from './contact-info'

export default function HeadOffice() {
  const t = useTranslations()
  const {
    title,
    members,
    financeAccounting,
    generalAffair,
    corporateSecretary,
  } = aboutOrganizationStructure.headOffice

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="text-center">
        <Typo size="2xl" color="gray-900" fontWeight="bold">
          {t('aboutPage.aboutOrganizationStructure.headOffice.title')}
        </Typo>
      </div>
      <div className="flex flex-col lg:flex-row">
        {t
          .raw('aboutPage.aboutOrganizationStructure.headOffice.members')
          .map((member: any, index: number) => (
            <ContactInfo
              key={index}
              name={member.name}
              position={member.position}
              src={member.src}
            />
          ))}
      </div>
      <div className="grid gap-y-8 lg:grid-cols-2">
        <Fields
          label={t(
            'aboutPage.aboutOrganizationStructure.headOffice.financeAccounting.label'
          )}
        >
          {t
            .raw(
              'aboutPage.aboutOrganizationStructure.headOffice.financeAccounting'
            )
            .members.map((item: any, index: number) => (
              <Field key={index}>{item}</Field>
            ))}
        </Fields>

        <Fields
          label={t(
            'aboutPage.aboutOrganizationStructure.headOffice.corporateSecretary.label'
          )}
        >
          {t
            .raw(
              'aboutPage.aboutOrganizationStructure.headOffice.corporateSecretary'
            )
            .members.map((item: any, index: number) => (
              <Field key={index}>
                {item.name}
                <p className=" text-gray-500">{item.additionalInfo}</p>
              </Field>
            ))}
        </Fields>
        <div className="flex lg:col-span-2 lg:justify-center">
          <Fields
            label={t(
              'aboutPage.aboutOrganizationStructure.headOffice.generalAffair.label'
            )}
          >
            {t
              .raw(
                'aboutPage.aboutOrganizationStructure.headOffice.generalAffair'
              )
              .members.map((item: any, index: number) => (
                <Field key={index}>{item}</Field>
              ))}
          </Fields>
        </div>
      </div>
    </>
  )
}
