import { tv } from 'tailwind-variants'

export const buttonStyle = tv({
  slots: {
    main: 'flex items-center gap-3',
    boxIcon: 'rounded bg-primary-50 p-1.5 text-primary-500',
  },
})

export const buttonWrapperStyle = tv({
  base: 'flex w-full items-center justify-between gap-x-3 p-4 text-gray-500 hover:bg-primary-25',
  variants: {
    isActive: {
      true: 'bg-primary-25',
    },
  },
})

export const buttonIconStyle = tv({
  base: 'ease-in-out duration-200',
  variants: {
    isActive: {
      true: 'text-primary-500 rotate-180',
      false: 'text-gray-500 rotate-0',
    },
  },
})
