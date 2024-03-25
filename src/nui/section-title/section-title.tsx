import { Flexbox } from '../flexbox'
import { Typo } from '../typo'
import { SectionTitleProps } from './types'

export default function SectionTitle({
  info,
  title,
  sizeTitle = '5xl',
  children,
}: SectionTitleProps) {
  return (
    <Flexbox flow="col" gap="sm">
      <div className="flex flex-col gap-1 text-center">
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
        <div className="max-w-[50rem] text-center">
          <Typo size="lg" color="gray-500">
            {children}
          </Typo>
        </div>
      )}
    </Flexbox>
  )
}
