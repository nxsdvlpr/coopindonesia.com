import { ReactNode } from 'react'
import { HTMLNUIProps } from '../../utils'

export type ButtonProps = {
  children?: ReactNode
  size?: 'sm' | 'md'
  wider?: 'sm' | 'md' | 'none'
  rounded?: 'full' | 'lg'
} & HTMLNUIProps<'button'>
