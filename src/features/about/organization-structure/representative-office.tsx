import { aboutOrganizationStructure } from '@/app/api/about'
import { Typo } from '@/nui'
import ContactInfo from './contact-info'

export default function RepresentativeOffice() {
  const { title, members } = aboutOrganizationStructure.representativeOffice

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="flex flex-col gap-12 text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          {title}
        </Typo>
        <ContactInfo
          src={members[0].src}
          name={members[0].name}
          position={members[0].position}
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {members.slice(1, 5).map((member, index) => (
          <ContactInfo
            key={index}
            name={member.name}
            position={member.position}
            src={member.src}
          />
        ))}
      </div>
      <ContactInfo
        src={members[5].src}
        name={members[5].name}
        position={members[5].position}
      >
        {members[5].additionalInfo}
      </ContactInfo>
    </>
  )
}
