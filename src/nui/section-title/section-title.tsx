import { Flexbox, Typo } from '../ui'
import { SectionTitleProps } from './types'

export default function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <Flexbox flow="col" gap="sm">
      <Typo size="5xl" color="black">
        {title}
      </Typo>
      <Typo size="lg" color="gray-500">
        {children}
      </Typo>
    </Flexbox>
  )
}
