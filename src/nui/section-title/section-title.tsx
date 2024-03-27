import { Typo } from '../typo'
import { sectionTitleStyle } from './section-title.style'
import { SectionTitleProps } from './types'

export default function SectionTitle({
  info,
  title,
  sizeTitle = '5xl',
  children,
}: SectionTitleProps) {
  const { wrapper, container, main } = sectionTitleStyle()

  return (
    <div className={wrapper()}>
      <div className={container()}>
        {info && (
          <Typo size="md" color="primary-500">
            {info}
          </Typo>
        )}
        <Typo size={sizeTitle} fontWeight="bold" color="black">
          {title}
        </Typo>
      </div>
      {children && (
        <div className={main()}>
          <Typo size="lg" color="gray-500">
            {children}
          </Typo>
        </div>
      )}
    </div>
  )
}
