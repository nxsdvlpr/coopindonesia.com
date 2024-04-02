import { tv } from 'tailwind-variants'

export const boxStyle = tv({
  base: 'bg-white h-full',
  variants: {
    border: {
      true: 'border border-gray-200',
    },
    rounded: {
      sm: 'rounded-lg',
      md: 'rounded-2xl',
    },
    padding: {
      xs: 'p-3',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-6 lg:p-8',
      xl: 'p-12',
    },
  },
})
