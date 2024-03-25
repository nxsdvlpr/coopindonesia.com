import { Field, Fields, Flexbox, Typo } from '@/nui'
import OrganizationStructureContactInfo from './contact-info'

export default function OrganizationStructureMICE() {
  return (
    <>
      <div className="text-center">
        <Typo size="xl" color="gray-900" fontWeight="bold">
          Departemen MICE
        </Typo>
        <Typo size="md" color="gray-900" fontWeight="semibold">
          (Meeting, Incentive, Convention, and Exhibition)
        </Typo>
      </div>
      <Flexbox flow="col" gap="xl">
        <OrganizationStructureContactInfo
          name="Amboro Alfianto"
          position="Direktur"
        />
        <Fields label="Tim Produksi dan Media:">
          <Field>Muhammad Hisyam Rabbani</Field>
          <Field>Hafid Nur Wahyudin</Field>
          <Field>Rifqi Solahudin Arsyad</Field>
        </Fields>
      </Flexbox>
    </>
  )
}
