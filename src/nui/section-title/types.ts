import { ReactNode } from 'react'
import { TypoSize } from '../typo/types'

export type SectionTitleProps = {
  info?: string
  title?: string
  sizeTitle?: TypoSize
  children?: ReactNode
}
