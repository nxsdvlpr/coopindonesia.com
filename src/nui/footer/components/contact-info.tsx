import { Flexbox, Icon, Typo } from '@/nui'
import Image from 'next/image'

export default function ContactInfo() {
  return (
    <div className="max-w-xs">
      <Flexbox align="start" flow="col" gap="lg">
        <div className="h-10 w-20">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full"
            src="/logo-text.png"
            alt="hero-image-coop-indonesia"
          />
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
      </Flexbox>
    </div>
  )
}
