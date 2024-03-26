import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'

export default function NihonggoAnabuki() {
  const images = [
    {
      src: '/pre-selection/pre-selection-image-1.png',
      alt: 'pre-selection-image-1-coop-indonesia',
    },
  ]

  const items = images.map((image, i) => (
    <Image
      key={i}
      width="0"
      height="0"
      sizes="100vw"
      className="h-full w-full rounded-lg object-cover"
      src={image.src}
      alt={image.alt}
    />
  ))

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PROGRAM PEMAGANGAN KE JEPANG"
          title="Sekolah Anabuki"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="md" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            Sekolah Anabuki
          </Typo>
          <Flexbox align="start" gap="md">
            <div className="mx-auto w-[37.51px]">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/nihonggo/logo-anabuki.png"
                alt="logo-anabuki-coop-indonesia"
              />
            </div>
            <Markdown>
              {`**Anabuki College Group** is a vocational school group with 14
            vocational schools in the Chugoku-Shikoku area. Berikut foto-foto
            kegiatan di sekolah Anabuki`}
            </Markdown>
          </Flexbox>
          <Carousel items={items} />
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
