import { bannerDataStatic } from '@/app/api/banner'
import { Button, Flexbox, Section, Typo } from '@/nui'
import Image from 'next/image'
import { bannerStyle } from './index.style'

export default function Banner() {
  const { wrapper, container, box, image: imageStyle } = bannerStyle()

  const { image, title, desc, buttonName } = bannerDataStatic

  return (
    <Section>
      <div className={wrapper()}>
        <div className={container()}>
          <div className={box()}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className={imageStyle()}
              src={image.src}
              alt={image.alt}
            />
          </div>
          <Flexbox align="start" flow="col" gap="xl">
            <Flexbox align="normal" flow="col" gap="sm">
              <Typo size="3xl" fontWeight="extrabold" color="gray-900">
                {title}
              </Typo>
              <Typo size="lg" color="gray-900">
                {desc}
              </Typo>
            </Flexbox>
            <Button>{buttonName}</Button>
          </Flexbox>
        </div>
      </div>
    </Section>
  )
}
