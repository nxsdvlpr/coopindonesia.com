import { Flexbox, Typo } from '../ui'
import { SectionTitleProps } from './types'

export default function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <Flexbox flow="col" gap="sm">
      <Typo size="5xl" fontWeight="bold" color="black">
        {title}
      </Typo>
      <div className="max-w-[50rem] text-center">
        <Typo size="lg" color="gray-500">
          {children}
        </Typo>
      </div>
    </Flexbox>
  )
}
