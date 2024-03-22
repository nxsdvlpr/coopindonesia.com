import { Flexbox, Section, Typo } from '@/nui'
import Image from 'next/image'

export function HomeHero() {
  return (
    <Section>
      <Flexbox>
        <Flexbox flow="col" gap="xl">
          <Typo size="6xl" fontWeight="extrabold" color="black">
            Welcome to LPK Coop Indonesia
          </Typo>
          <Typo size="lg">
            LPK Coop Indonesia is one of{' '}
            <strong>Sending Organization (SO)</strong> that assists Indonesian
            youth in developing their skills by placing them in leading Japanese
            companies.
          </Typo>
        </Flexbox>
        <Image
          width={539}
          height={345}
          src="/hero-image.svg"
          alt="hero-image-coop-indonesia"
        />
      </Flexbox>
    </Section>
  )
}
