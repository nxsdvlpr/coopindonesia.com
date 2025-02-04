import { intershipRegistrationDataStatic } from '@/app/[locale]/api/internship'
import { Flexbox, ImageNui, Typo } from '@/nui'

export default function Address() {
  const { title, subtitle, image, locations } =
    intershipRegistrationDataStatic.address

  return (
    <Flexbox align="normal" flow="col" gap="sm">
      <Flexbox flow="col" gap="xs" align="normal">
        <Typo size="2xl" color="gray-900" fontWeight="bold">
          {title}
        </Typo>
        <Typo size="lg">{subtitle}</Typo>
      </Flexbox>
      <div className="mx-auto max-w-[37.5rem]">
        <ImageNui src={image.src} alt={image.alt} />
      </div>
      <Flexbox flow="col" gap="2xl" align="normal">
        {locations.map((location, index) => (
          <Flexbox key={index} flow="col" align="normal" gap="xs">
            <Typo size="lg" fontWeight="bold" color="gray-900">
              {location.region}
            </Typo>
            <ul className="grid list-disc gap-x-12 gap-y-2 py-0.5 pl-4 lg:grid-cols-2">
              {location.offices.map((office) => (
                <li
                  key={office.name}
                  className="text-base text-gray-700 lg:text-lg"
                >
                  {office.name}
                  <p className="font-bold">{office.phone}</p>
                </li>
              ))}
            </ul>
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  )
}
