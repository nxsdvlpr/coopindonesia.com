import { Field, Fields, Typo } from '@/nui'
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
      <div className="flex flex-col gap-8 lg:items-center">
        <OrganizationStructureContactInfo
          name="Amboro Alfianto"
          position="Direktur"
        />
        <Fields label="Tim Produksi dan Media:">
          <Field>Muhammad Hisyam Rabbani</Field>
          <Field>Hafid Nur Wahyudin</Field>
          <Field>Rifqi Solahudin Arsyad</Field>
        </Fields>
      </div>
    </>
  )
}
