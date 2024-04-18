import { Flexbox, Icon, ImageNui, Typo } from '@/nui'

export default function ContactInfo() {
  return (
    <div className="max-w-sm">
      <div className="flex flex-col gap-x-8 gap-y-6 lg:flex-row">
        <div className="h-[3.75rem] w-[3.75rem] shrink-0">
          <ImageNui src="/logo.png" alt="hero-image-coop-indonesia" />
        </div>

        <Flexbox gap="lg" align="start" flow="col">
          <Typo size="md" color="gray-900">
            Jl. Ciragil II No.6;RT/RW 001/001 Kel. Rawa Barat, Kec. Kebayoran
            Baru Jakarta Selatan 12180
          </Typo>
          <Flexbox gap="2xs" align="start" flow="col">
            <Flexbox align="center" gap="xs">
              <div className="h-4 w-4 text-gray-500">
                <Icon size="sm" icon="lucide:phone" />
              </div>
              <Typo size="md" fontWeight="medium" color="gray-900">
                +62 21 29501010
              </Typo>
            </Flexbox>
            <Flexbox align="center" gap="xs">
              <div className="h-4 w-4 text-gray-500">
                <Icon size="sm" icon="lucide:mail" />
              </div>
              <Typo size="md" fontWeight="medium" color="gray-900">
                mail@coopindonesia.com
              </Typo>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </div>
    </div>
  )
}
