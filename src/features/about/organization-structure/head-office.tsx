import { aboutOrganizationStructure } from '@/app/api/about'
import { Field, Fields, Flexbox, Typo } from '@/nui'
import ContactInfo from './contact-info'

export default function HeadOffice() {
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
          {title}
        </Typo>
      </div>
      <div className="flex flex-col lg:flex-row">
        {members.map((member, index) => (
          <ContactInfo
            key={index}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
      <div className="grid gap-y-8 lg:grid-cols-2">
        <Flexbox align="normal" flow="col" gap="2xl">
          <Fields label={financeAccounting.label}>
            {financeAccounting.members.map((item, index) => (
              <Field key={index}>{item}</Field>
            ))}
          </Fields>
          <Fields label={generalAffair.label}>
            {generalAffair.members.map((item, index) => (
              <Field key={index}>{item}</Field>
            ))}
          </Fields>
        </Flexbox>
        <Fields label={corporateSecretary.label}>
          {corporateSecretary.members.map((item, index) => (
            <Field key={index}>
              {item.name}
              <p className=" text-gray-500">{item.additionalInfo}</p>
            </Field>
          ))}
        </Fields>
      </div>
    </>
  )
}
