import { Button, Flexbox, Section, Typo } from '@/nui'
import Image from 'next/image'

export default function Banner() {
  return (
    <Section>
      <div className="h-fit w-full bg-[url('/banner/banner-bg-image.svg')] p-10">
        <Flexbox gap="2xl">
          <div className="w-[400px] shrink-0 overflow-hidden rounded-lg bg-primary-200 p-6">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-full w-full"
              src="/banner/banner-image-1.svg"
              alt="banner-image-1-coop-indonesia"
            />
          </div>
          <Flexbox align="start" flow="col" gap="xl">
            <Flexbox align="normal" flow="col" gap="sm">
              <Typo size="3xl" fontWeight="bold" color="black">
                We invite you to become a part of our development program.
              </Typo>
              <Typo size="md" color="black">
                Join us for a better life journey! Let's embark together on a
                path of growth, fulfillment, and endless possibilities. Start
                your journey today
              </Typo>
            </Flexbox>
            <Button>Join Us</Button>
          </Flexbox>
        </Flexbox>
      </div>
    </Section>
  )
}
