import { aboutOrganizationStructure } from '@/app/[locale]/api/about'
import { Field, Fields, Flexbox, Typo } from '@/nui'
import { useTranslations } from 'next-intl'
import ContactInfo from './contact-info'

export default function Education() {
  const t = useTranslations()
  const {
    title,
    members,
    publicRelations,
    corporateSecretary,
    disciplinInstructors,
    generalAffairs,
    languageInstructors,
    mathInstructors,
  } = aboutOrganizationStructure.education

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          {t('aboutPage.aboutOrganizationStructure.education.title')}
        </Typo>
      </div>
      <Flexbox align="normal" flow="col" gap="xl">
        <div className="grid lg:grid-cols-2">
          {t
            .raw('aboutPage.aboutOrganizationStructure.education.members')
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
        </div>
        <div className="grid gap-y-6 lg:grid-cols-2">
          <Flexbox align="start" justify="between" flow="col" gap="xl">
            <Fields
              label={t(
                'aboutPage.aboutOrganizationStructure.education.publicRelations.label'
              )}
            >
              {t
                .raw(
                  'aboutPage.aboutOrganizationStructure.education.publicRelations.members'
                )
                .map((item: any, index: number) => (
                  <Field key={index}>{item}</Field>
                ))}
            </Fields>
            <Fields
              label={t(
                'aboutPage.aboutOrganizationStructure.education.corporateSecretary.label'
              )}
            >
              {t
                .raw(
                  'aboutPage.aboutOrganizationStructure.education.corporateSecretary.members'
                )
                .map((item: any, index: number) => (
                  <Field key={index}>{item}</Field>
                ))}
            </Fields>
          </Flexbox>
          <div className="w-full">
            <Fields
              label={t(
                'aboutPage.aboutOrganizationStructure.education.disciplinInstructors.label'
              )}
            >
              {t
                .raw(
                  'aboutPage.aboutOrganizationStructure.education.disciplinInstructors.members'
                )
                .map((item: any, index: number) => (
                  <Field key={index}>
                    {item.name}
                    <p className="text-gray-500">{item.additionalInfo}</p>
                  </Field>
                ))}
            </Fields>
          </div>
        </div>
        <div className="w-full">
          <Fields
            label={t(
              'aboutPage.aboutOrganizationStructure.education.languageInstructors.label'
            )}
          >
            {t
              .raw(
                'aboutPage.aboutOrganizationStructure.education.languageInstructors.members'
              )
              .map((item: any, index: number) => (
                <Field key={index}>
                  {item.name}
                  <p className="text-gray-500">{item.additionalInfo}</p>
                </Field>
              ))}
          </Fields>
        </div>
        {/* <div className="w-full">
          <Fields label={mathInstructors.label}>
            {mathInstructors.members.map((item, index) => (
              <Field key={index}>
                {item.name}
                <p className="text-gray-500">{item.additionalInfo}</p>
              </Field>
            ))}
          </Fields>
        </div> */}
        <div className="w-full">
          <Fields
            label={t(
              'aboutPage.aboutOrganizationStructure.education.generalAffairs.label'
            )}
          >
            {t
              .raw(
                'aboutPage.aboutOrganizationStructure.education.generalAffairs.members'
              )
              .map((item: any, index: number) => (
                <Field key={index}>{item}</Field>
              ))}
          </Fields>
        </div>
      </Flexbox>
    </>
  )
}
