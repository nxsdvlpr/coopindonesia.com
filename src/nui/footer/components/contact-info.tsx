import { Flexbox, Icon, ImageNui, Typo } from '@/nui'

export default function ContactInfo() {
  return (
    <div className="max-w-2xl">
      <div className="flex flex-col gap-x-8 gap-y-6 lg:flex-row">
        <div className="h-[3.75rem] w-[3.75rem] shrink-0">
          <ImageNui src="/logo.png" alt="hero-image-coop-indonesia" />
        </div>
        <div className="grid gap-x-8 gap-y-6 lg:grid-cols-2">
          <Flexbox gap="lg" align="start" flow="col">
            <Flexbox gap="2xs" align="start" flow="col">
              <Typo size="md" fontWeight="semibold" color="gray-900">
                Head Office
              </Typo>
              <Typo size="sm" color="gray-900">
                Jl. Ciragil II No.6;RT/RW 001/001 Kel. Rawa Barat, Kec.
                Kebayoran Baru Jakarta Selatan 12180
              </Typo>
            </Flexbox>
            <Flexbox gap="2xs" align="start" flow="col">
              <Flexbox align="center" gap="xs">
                <div className="h-4 w-4 text-gray-500">
                  <Icon size="sm" icon="lucide:phone" />
                </div>
                <Typo size="sm" fontWeight="medium" color="gray-900">
                  +62 21 29501010
                </Typo>
              </Flexbox>
              <Flexbox align="center" gap="xs">
                <div className="h-4 w-4 text-gray-500">
                  <Icon size="sm" icon="lucide:mail" />
                </div>
                <Typo size="sm" fontWeight="medium" color="gray-900">
                  mail@coopindonesia.com
                </Typo>
              </Flexbox>
            </Flexbox>
          </Flexbox>
          <Flexbox gap="2xs" align="start" flow="col">
            <Typo size="md" fontWeight="semibold" color="gray-900">
              PUSDIKLAT LPK COOP Indonesia
            </Typo>
            <Typo size="sm" color="gray-900">
              Jl. Arcamanik Sindanglaya, KP. Sekesalam RT/RW 001/008, DS.
              Sindanglaya, Kec. Cimenyan, Kab. Bandung, Jawa Barat 40195
            </Typo>
          </Flexbox>
        </div>
      </div>
    </div>
  )
}
