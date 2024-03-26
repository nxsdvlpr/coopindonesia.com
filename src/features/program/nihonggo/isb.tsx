import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'

export default function NihonggoIsb() {
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
          title="Sekolah ISB"
        />
      </Section>
      <Section maxWidth="content">
        <Flexbox flow="col" gap="md" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            International School of Business
          </Typo>
          <Flexbox gap="md">
            <div className="h-10 w-10">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src="/nihonggo/logo-isb.png"
                alt="logo-isb-coop-indonesia"
              />
            </div>
            <Typo size="lg" fontWeight="bold" color="gray-700">
              Aren't Dreams There to Come True! <br />
              Everyone has a dream.
            </Typo>
          </Flexbox>
          <Markdown>
            {`How to achieve that dream may be of the utmost importance to a young person.<br /><br />
There are many overseas students from several different countries at International School of Business, who are studying the Japanese language, culture and international business. ISB always welcome overseas student's dynamic exchange and endeavors to preserve an international-campus environment.<br /><br />
we strongly hope that our students attain their own goals through our campus life, and that they keep perusing the belief:<br /><br />
**"Dreams are there to come true"**<br /><br />
Berikut foto-foto kegiatan di sekolah ISB`}
          </Markdown>
          <Carousel items={items} />
        </Flexbox>
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
