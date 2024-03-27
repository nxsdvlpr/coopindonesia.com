import { Flexbox, Section, Typo } from '@/nui'
import Image from 'next/image'

export function HomeHero() {
  return (
    <Section>
      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        <Flexbox flow="col" gap="xl">
          <Flexbox align="start" flow="col" gap="xs">
            <Typo size="md" fontWeight="extrabold" color="primary-500">
              HOME
            </Typo>
            <Typo size="6xl" fontWeight="extrabold" color="gray-900">
              Welcome to LPK Coop Indonesia
            </Typo>
          </Flexbox>
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
      </div>
    </Section>
  )
}
