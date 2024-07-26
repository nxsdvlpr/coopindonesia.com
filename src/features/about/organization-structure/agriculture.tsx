import { aboutOrganizationStructure } from '@/app/api/about'
import { Field, Fields, Flexbox, Typo } from '@/nui'
import ContactInfo from './contact-info'

export default function Agriculture() {
  const { title, members, supervisor } = aboutOrganizationStructure.agriculture

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          {title}
        </Typo>
      </div>
      <Flexbox flow="col" gap="xl">
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
        <div className="w-full lg:w-auto">
          <Flexbox flow="col" gap="sm" align="start">
            <Fields label={supervisor.title}>
              {supervisor.members.map((supervisor, index) => (
                <Field key={index}>
                  {supervisor.name}
                  <p className="text-gray-500">{supervisor.additionalInfo}</p>
                </Field>
              ))}
            </Fields>
          </Flexbox>
        </div>
      </Flexbox>
    </>
  )
}
