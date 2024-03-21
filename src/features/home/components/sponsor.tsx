import { Flexbox, Section, Typo } from '@/nui'
import Image from 'next/image'

export function SponsorHome() {
  return (
    <Section>
      <Flexbox flow="col" gap="2xl">
        <Typo size="lg">
          Kami berkolaborasi untuk mencapai dampak terbesar bagi komunitas.
        </Typo>
        <Flexbox justify="between" gap="2xl">
          <div className="w-[150px]">
            <Image
              width={315}
              height={184}
              src="/sponsor/fursato-logo.png"
              alt="fursato-logo-coop-indonesia"
            />
          </div>
          <div className="w-[150px]">
            <Image
              width={315}
              height={184}
              src="/sponsor/coop-japan-logo.png"
              alt="fursato-logo-coop-indonesia"
            />
          </div>
          <div className="w-16">
            <Image
              width={315}
              height={184}
              className="object-contain"
              src="/sponsor/other-sponsor-logo.png"
              alt="fursato-logo-coop-indonesia"
            />
          </div>
          <div className="w-[150px]">
            <Image
              width={315}
              height={184}
              src="/sponsor/igs-logo.png"
              alt="fursato-logo-coop-indonesia"
            />
          </div>
        </Flexbox>
      </Flexbox>
    </Section>
  )
}
