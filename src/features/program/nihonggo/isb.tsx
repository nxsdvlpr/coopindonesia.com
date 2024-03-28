import { AskedQuestion, Banner, FeaturedPrograms } from '@/features/shared'
import { Flexbox, Markdown, Section, SectionTitle, Typo } from '@/nui'
import Carousel from '@/nui/carousel/carousel'
import Image from 'next/image'

export default function NihonggoIsb() {
  const nihonggoIsb = {
    info: 'PROGRAM PEMAGANGAN KE JEPANG',
    title: 'Sekolah ISB',
    content: {
      title: 'Sekolah ISB',
      image: {
        src: '/nihonggo/logo-isb.png',
        alt: 'logo-isb-coop-indonesia',
      },
      body: `How to achieve that dream may be of the utmost importance to a young person.<br /><br />There are many overseas students from several different countries at International School of Business, who are studying the Japanese language, culture and international business. ISB always welcome overseas student's dynamic exchange and endeavors to preserve an international-campus environment.<br /><br />
      we strongly hope that our students attain their own goals through our campus life, and that they keep perusing the belief:<br /><br />
      **"Dreams are there to come true"**<br /><br />
      Berikut foto-foto kegiatan di sekolah ISB`,
    },
    images: [
      {
        src: '/training/training-image-2.png',
        alt: 'training-image-2-coop-indonesia',
      },
      {
        src: '/training/training-image-3.png',
        alt: 'training-image-3-coop-indonesia',
      },
      {
        src: '/training/training-image-4.png',
        alt: 'training-image-4-coop-indonesia',
      },
      {
        src: '/training/training-image-5.png',
        alt: 'training-image-5-coop-indonesia',
      },
    ],
  }

  const { info, title, images, content } = nihonggoIsb

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
        <SectionTitle sizeTitle="6xl" info={info} title={title} />
      </Section>
      <Section maxWidth="sm">
        <Flexbox flow="col" gap="xs" align="normal">
          <Typo size="2xl" fontWeight="bold" color="gray-900">
            {content.title}
          </Typo>
          <Flexbox gap="md">
            <div className="h-10 w-10">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src={content.image.src}
                alt={content.image.alt}
              />
            </div>
            <Typo size="lg" fontWeight="bold" color="gray-700">
              Aren't Dreams There to Come True! <br />
              Everyone has a dream.
            </Typo>
          </Flexbox>
        </Flexbox>
        <Markdown size="lg">{content.body}</Markdown>
        <Carousel items={items} />
      </Section>
      <FeaturedPrograms variant="gray" />
      <AskedQuestion />
      <Banner />
    </>
  )
}
