import { Flexbox, Icon, ImageNui, Typo } from '@/nui'

export default function ContactUsAddress() {
  return (
    <div className="max-w-xs shrink-0">
      <Flexbox flow="col">
        <div className="flex flex-col items-start justify-start gap-6 lg:items-end lg:justify-end">
          <div className="flex flex-col gap-1 lg:text-end">
            <Typo size="lg" fontWeight="semibold" color="gray-900">
              COOP Indonesia
            </Typo>
            <Typo color="gray-500">
              Jl. Ciragil II No.6; RT/RW 001/001 Kel. Rawa Barat, Kec. Kebayoran
              Baru Jakarta Selatan 12180
            </Typo>
          </div>
          <div className="flex flex-col text-end lg:items-end lg:justify-end">
            <Flexbox align="center" gap="xs">
              <div className="h-4 w-4 text-gray-500">
                <Icon size="sm" icon="lucide:phone" />
              </div>
              <Typo size="sm" fontWeight="medium" color="gray-500">
                +62 21 29501010
              </Typo>
            </Flexbox>
            <Flexbox align="center" gap="xs">
              <div className="h-4 w-4 text-gray-500">
                <Icon size="sm" icon="lucide:mail" />
              </div>
              <Typo size="sm" fontWeight="medium" color="gray-500">
                mail@coopindonesia.com
              </Typo>
            </Flexbox>
          </div>
        </div>
        <div className="-mr-14 w-[20.3125rem] overflow-hidden rounded-lg">
          <ImageNui src="/contact-us-image.svg" alt="contact-us-image" />
        </div>
      </Flexbox>
    </div>
  )
}
