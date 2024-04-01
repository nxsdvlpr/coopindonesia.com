import { aboutOrganizationStructure } from '@/app/api/about'
import { Field, Fields, Flexbox, Typo } from '@/nui'
import ContactInfo from './contact-info'

export default function Development() {
  const { title, members } = aboutOrganizationStructure.development

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          {title}
        </Typo>
      </div>
      <Flexbox flow="col" gap="xl">
        <ContactInfo name={members[0].name} position={members[0].position} />
        <div className="m-auto max-w-md">
          <Fields>
            {members.slice(1).map((member, index) => (
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
