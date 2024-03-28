import { ReactNode } from 'react'
import { HTMLNUIProps } from '../../utils/types'

export type TypoSize =
  | '6xl'
  | '5xl'
  | '3xl'
  | '2xl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'

export type TypoFontWeight =
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'

export type TypoColor =
  | 'black'
  | 'gray-900'
  | 'gray-700'
  | 'gray-500'
  | 'gray-400'
  | 'primary-500'
  | 'primary-600'
  | 'primary-700'

export type TypoProps = {
  size?: TypoSize
  fontWeight?: TypoFontWeight
  color?: TypoColor
  children?: ReactNode
} & HTMLNUIProps<'div'>
