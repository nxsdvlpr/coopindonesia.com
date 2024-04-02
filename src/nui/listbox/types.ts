import { ReactNode } from 'react'

export type ListboxProps = {
  label?: ReactNode | string
  isOpen: boolean
  children?: ReactNode
}
