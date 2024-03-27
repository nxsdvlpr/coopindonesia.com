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
      'flex items-center justify-between gap-3 text-start hover:text-primary-500',
    icon: 'h-fit w-fit text-gray-900 duration-200 ease-in-out',
    iconActive: 'h-fit w-fit rotate-180 text-gray-900 duration-200 ease-in-out',
    iconBox: 'flex h-6 w-6 items-center justify-center',
  },
})
