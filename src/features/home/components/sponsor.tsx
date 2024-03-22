import { Flexbox, Section, Typo } from '@/nui'
import Image from 'next/image'

export function HomeSponsor() {
  const sponsorImages = [
    {
      src: '/sponsor/fursato-logo.png',
      alt: 'fursato-logo-coop-indonesia',
    },
    {
      src: '/sponsor/coop-japan-logo.png',
      alt: 'coop-japan-logo-coop-indonesia',
    },
    {
      src: '/sponsor/other-sponsor-logo.png',
      alt: 'other-sponsor-logo-coop-indonesia',
    },
    {
      src: '/sponsor/igs-logo.png',
      alt: 'igs-logo-coop-indonesia',
    },
  ]

  return (
    <Section>
      <Flexbox flow="col" gap="3xl">
        <Typo size="lg">
          Kami berkolaborasi untuk mencapai dampak terbesar bagi komunitas.
        </Typo>
        <Flexbox justify="between" gap="4xl">
          {sponsorImages.map((sponsorImage) => (
            <div className="h-16" key={sponsorImage.alt}>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full"
                src={sponsorImage.src}
                alt={sponsorImage.alt}
              />
            </div>
          ))}
        </Flexbox>
      </Flexbox>
    </Section>
  )
}
