import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function Vlog() {
  const vlogs = [
    {
      image: {
        src: '/from-our-instagram/from-our-instagram-image-1.png',
        alt: '/from-our-instagram/from-our-instagram-image-1.png',
      },
      title:
        'Podcast BINCANG-BINCANG COOP EPS.2 – “Kepo-Kepo Kegiatan Di COOP INDONESIA”',
    },
    {
      image: {
        src: '/from-our-instagram/from-our-instagram-image-2.png',
        alt: '/from-our-instagram/from-our-instagram-image-2.png',
      },
      title: 'Apa sih LPK Coop Indonesia',
    },
    {
      image: {
        src: '/from-our-instagram/from-our-instagram-image-3.png',
        alt: '/from-our-instagram/from-our-instagram-image-3.png',
      },
      title: 'Ujian Kompetisi Ground Handling Japan Version',
    },
    {
      image: {
        src: '/from-our-instagram/from-our-instagram-image-4.png',
        alt: '/from-our-instagram/from-our-instagram-image-4.png',
      },
      title:
        'Kepo-kepo Kegiatan di Coop Indonesia Bersama Bpk. Irawan Ardiyanto',
    },
  ]

  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="PUBLICATION" title="Vlog" />
      </Section>
      <Section>
        <Flexbox flow="col" gap="3xl">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-full rounded-lg object-cover"
            src="/from-our-youtube-channel/from-our-youtube-channel-image-1.png"
            alt="from-our-youtube-channel-image-1-coop-indonesia"
          />
          <div className="grid grid-cols-4 gap-8">
            {vlogs.map((item, index) => (
              <div key={index} className="flex h-fit flex-col gap-4">
                <div className="h-[155px]">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-full w-full rounded-lg object-cover"
                    src={item.image.src}
                    alt={item.image.alt}
                  />
                </div>
                <Typo size="md" fontWeight="semibold" color="gray-900">
                  {item.title}
                </Typo>
              </div>
            ))}
          </div>
        </Flexbox>
      </Section>
    </>
  )
}
