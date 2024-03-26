import { ReactNode } from 'react'

export type FlexboxFlow = 'col' | 'row'

export type FlexboxGap =
  | 'none'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'

export type FlexboxAlign = 'normal' | 'start' | 'center' | 'end'

export type Flexboxjustify = 'normal' | 'start' | 'between' | 'end'

export type FlexboxProps = {
  flow?: FlexboxFlow
  gap?: FlexboxGap
  align?: FlexboxAlign
  justify?: Flexboxjustify
  children?: ReactNode
}
