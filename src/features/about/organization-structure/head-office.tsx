import { aboutOrganizationStructure } from '@/app/[locale]/api/about'
import { Field, Fields, Typo } from '@/nui'
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
            src={member.src}
          />
        ))}
      </div>
      <div className="grid gap-y-8 lg:grid-cols-2">
        <Fields label={financeAccounting.label}>
          {financeAccounting.members.map((item, index) => (
            <Field key={index}>{item}</Field>
          ))}
        </Fields>

        <Fields label={corporateSecretary.label}>
          {corporateSecretary.members.map((item, index) => (
            <Field key={index}>
              {item.name}
              <p className=" text-gray-500">{item.additionalInfo}</p>
            </Field>
          ))}
        </Fields>
        <div className="flex lg:col-span-2 lg:justify-center">
          <Fields label={generalAffair.label}>
            {generalAffair.members.map((item, index) => (
              <Field key={index}>{item}</Field>
            ))}
          </Fields>
        </div>
      </div>
    </>
  )
}
