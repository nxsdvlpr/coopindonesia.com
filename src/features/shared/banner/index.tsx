import { Button, Flexbox, Section, Typo } from '@/nui'
import Image from 'next/image'
import { bannerStyle } from './index.style'

export default function Banner() {
  const { wrapper, container, box, image } = bannerStyle()

  return (
    <Section>
      <div className={wrapper()}>
        <div className={container()}>
          <div className={box()}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className={image()}
              src="/banner/banner-image-1.svg"
              alt="banner-image-1-coop-indonesia"
            />
          </div>
          <Flexbox align="start" flow="col" gap="xl">
            <Flexbox align="normal" flow="col" gap="sm">
              <Typo size="3xl" fontWeight="extrabold" color="gray-900">
                We invite you to become a part of our development program.
              </Typo>
              <Typo size="lg" color="gray-900">
                Join us for a better life journey! Let's embark together on a
                path of growth, fulfillment, and endless possibilities. Start
                your journey today
              </Typo>
            </Flexbox>
            <Button>Contact Us</Button>
          </Flexbox>
        </div>
      </div>
    </Section>
  )
}
