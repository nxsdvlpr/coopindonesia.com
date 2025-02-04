import { aboutOrganizationStructure } from '@/app/[locale]/api/about'
import { Field, Fields, Flexbox, Typo } from '@/nui'
import ContactInfo from './contact-info'

export default function Education() {
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
          {title}
        </Typo>
      </div>
      <Flexbox align="normal" flow="col" gap="xl">
        <div className="grid lg:grid-cols-2">
          {members.map((member, index) => (
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
            <Fields label={publicRelations.label}>
              {publicRelations.members.map((item, index) => (
                <Field key={index}>{item}</Field>
              ))}
            </Fields>
            <Fields label={corporateSecretary.label}>
              {corporateSecretary.members.map((item, index) => (
                <Field key={index}>{item}</Field>
              ))}
            </Fields>
          </Flexbox>
          <div className="w-full">
            <Fields label={disciplinInstructors.label}>
              {disciplinInstructors.members.map((item, index) => (
                <Field key={index}>
                  {item.name}
                  <p className="text-gray-500">{item.additionalInfo}</p>
                </Field>
              ))}
            </Fields>
          </div>
        </div>
        <div className="w-full">
          <Fields label={languageInstructors.label}>
            {languageInstructors.members.map((item, index) => (
              <Field key={index}>
                {item.name}
                <p className="text-gray-500">{item.additionalInfo}</p>
              </Field>
            ))}
          </Fields>
        </div>
        <div className="w-full">
          <Fields label={mathInstructors.label}>
            {mathInstructors.members.map((item, index) => (
              <Field key={index}>
                {item.name}
                <p className="text-gray-500">{item.additionalInfo}</p>
              </Field>
            ))}
          </Fields>
        </div>
        <div className="w-full">
          <Fields label={generalAffairs.label}>
            {generalAffairs.members.map((item, index) => (
              <Field key={index}>{item}</Field>
            ))}
          </Fields>
        </div>
      </Flexbox>
    </>
  )
}
