import { PropsWithoutRef, ReactNode } from 'react'

export type ButtonPropsWithoutRef = PropsWithoutRef<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export type ButtonProps = {
  children?: ReactNode
  size?: 'sm' | 'md'
  wider?: 'sm' | 'md' | 'none'
  rounded?: 'full' | 'lg'
} & ButtonPropsWithoutRef
