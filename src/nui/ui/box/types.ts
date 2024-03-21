import { ReactNode } from 'react'

export type BoxPadding = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type BoxProps = {
  children?: ReactNode
  padding?: BoxPadding
  withBorder?: boolean
}
