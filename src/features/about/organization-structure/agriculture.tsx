import { aboutOrganizationStructure } from '@/app/api/about'
import { Field, Fields, Flexbox, Typo } from '@/nui'
import ContactInfo from './contact-info'

export default function Agriculture() {
  const { title, members, supervisor, administrator } =
    aboutOrganizationStructure.agriculture

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
          >
            {member.additionalInfo}
          </ContactInfo>
        ))}
        <Flexbox flow="col" gap="sm" align="start">
          <Fields label={supervisor.title}>
            {supervisor.members.map((supervisor, index) => (
              <Field key={index}>
                {supervisor.name}
                <p className="text-gray-500">{supervisor.additionalInfo}</p>
              </Field>
            ))}
          </Fields>
          <Fields label={administrator.title}>
            {administrator.members.map((administrator, index) => (
              <Field key={index}>
                {administrator.name}
                <p className="text-gray-500">{administrator.additionalInfo}</p>
              </Field>
            ))}
          </Fields>
        </Flexbox>
      </Flexbox>
    </>
  )
}
