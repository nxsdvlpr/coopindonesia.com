import { instagramData } from '@/app/api/publication'
import { Section, SectionTitle } from '@/nui'
import Image from 'next/image'

export default async function Instagram() {
  const data = await instagramData()

  const instagrams = data ?? []

  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info="PUBLICATION"
          title="From Our Social Media Account"
        />
      </Section>
      <Section>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {instagrams.map((item: any, index: number) => (
            <div key={index} className="h-[10rem] w-full lg:h-[16.5rem]">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full rounded-lg object-cover"
                src={item.url.large ?? item.url.medium}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
