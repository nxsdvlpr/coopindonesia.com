import { ReactNode } from 'react'

export type TypoSize = '6xl' | '5xl' | 'xl' | 'lg' | 'md' | 'sm'

export type TypoColor =
  | 'black'
  | 'gray-900'
  | 'gray-700'
  | 'gray-500'
  | 'gray-400'

export type TypoProps = {
  size?: TypoSize
  color?: TypoColor
  children?: ReactNode
}
