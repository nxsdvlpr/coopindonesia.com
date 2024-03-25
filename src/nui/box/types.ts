import { ReactNode } from 'react'

export type BoxPadding = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type BoxRounded = 'sm' | 'md'

export type BoxProps = {
  children?: ReactNode
  padding?: BoxPadding
  rounded?: BoxRounded
  withBorder?: boolean
}
