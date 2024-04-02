import { Dispatch, ReactNode, SetStateAction } from 'react'
import { tv } from 'tailwind-variants'

export type CardProps = {
  id: string
  isOpen: string
  setIsOpen: Dispatch<SetStateAction<string>>
  title?: string
  children?: ReactNode
}

export const cardStyle = tv({
  slots: {
    wrapper: 'h-fit w-full',
    button:
      'flex items-center justify-between w-full gap-3 text-start hover:text-primary-500',
  },
})

export const cardIconStyle = tv({
  base: 'ease-in-out duration-200',
  variants: {
    isOpen: {
      true: 'text-primary-500 rotate-180',
      false: 'text-gray-900 rotate-0',
    },
  },
})
