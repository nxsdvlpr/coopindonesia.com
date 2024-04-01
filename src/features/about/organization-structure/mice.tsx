import { aboutOrganizationStructure } from '@/app/api/about'
import { Field, Fields, Typo } from '@/nui'
import ContactInfo from './contact-info'

export default function Mice() {
  const { title, subtitle, name, position, staffProduct } =
    aboutOrganizationStructure.MICE

  return (
    <>
      <div className="h-1 w-full border-b border-gray-200" />
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          {title}
        </Typo>
        <Typo size="md" color="gray-900" fontWeight="semibold">
          {subtitle}
        </Typo>
      </div>
      <div className="flex flex-col gap-8 lg:items-center">
        <ContactInfo name={name} position={position} />
        <Fields label={staffProduct.title}>
          {staffProduct.staffs.map((item, index) => (
            <Field key={index}>{item}</Field>
          ))}
        </Fields>
      </div>
    </>
  )
}
