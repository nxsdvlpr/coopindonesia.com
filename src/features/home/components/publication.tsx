import { Flexbox, Section, SectionTitle, Typo } from '@/nui'
import Image from 'next/image'

export default function HomePublication() {
  return (
    <Section>
      <SectionTitle title="Publication">
        Updates from our social media platform
      </SectionTitle>
      <Flexbox align="normal" flow="col">
        <div className="overflow-hidden rounded-lg">
          <Image
            width={1200}
            height={184}
            src="/featured-programs/image-1.svg"
            alt="hero-image-coop-indonesia"
          />
        </div>
        <Flexbox justify="between">
          <Flexbox align="start" flow="col" gap="xs">
            <Typo size="xl" color="gray-900">
              From Our Instagram
            </Typo>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-[190px] w-[190px] overflow-hidden rounded-lg bg-gray-500">
                <Image
                  width={1200}
                  height={184}
                  src="/featured-programs/image-1.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
              <div className="h-[190px] w-[190px] overflow-hidden rounded-lg bg-gray-500">
                <Image
                  width={1200}
                  height={184}
                  src="/featured-programs/image-1.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
              <div className="h-[190px] w-[190px] overflow-hidden rounded-lg bg-gray-500">
                <Image
                  width={1200}
                  height={184}
                  src="/featured-programs/image-1.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
              <div className="h-[190px] w-[190px] overflow-hidden rounded-lg bg-gray-500">
                <Image
                  width={1200}
                  height={184}
                  src="/featured-programs/image-1.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
            </div>
          </Flexbox>
          <Flexbox align="start" flow="col" gap="xs">
            <Typo size="xl" color="gray-900">
              From Our YouTube Channel
            </Typo>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-[190px] w-[340px] overflow-hidden rounded-lg bg-gray-500">
                <Image
                  width={1200}
                  height={184}
                  src="/featured-programs/image-1.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
              <div className="h-[190px] w-[340px] overflow-hidden rounded-lg bg-gray-500">
                <Image
                  width={1200}
                  height={184}
                  src="/featured-programs/image-1.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
              <div className="h-[190px] w-[340px] overflow-hidden rounded-lg bg-gray-500">
                <Image
                  width={1200}
                  height={184}
                  src="/featured-programs/image-1.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
              <div className="h-[190px] w-[340px] overflow-hidden rounded-lg bg-gray-500">
                <Image
                  width={1200}
                  height={184}
                  src="/featured-programs/image-1.svg"
                  alt="hero-image-coop-indonesia"
                />
              </div>
            </div>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Section>
  )
}
