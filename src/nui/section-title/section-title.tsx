import { Flexbox, Typo } from '../ui'
import { SectionTitleProps } from './types'

export default function SectionTitle({
  info,
  title,
  children,
}: SectionTitleProps) {
  return (
    <Flexbox flow="col" gap="sm">
      <div className="text-center">
        {info && (
          <Typo size="md" color="primary-500">
            {info}
          </Typo>
        )}
        <Typo size="6xl" fontWeight="bold" color="black">
          {title}
        </Typo>
      </div>
      {children && (
        <div className="max-w-[50rem] text-center">
          <Typo size="lg" color="gray-500">
            {children}
          </Typo>
        </div>
      )}
    </Flexbox>
  )
}
