import { ReactNode } from 'react'

export type SectionProps = {
  children?: ReactNode
  variant?: 'none' | 'gray'
  maxWidth?: 'md' | 'sm'
}
