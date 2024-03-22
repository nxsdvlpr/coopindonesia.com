import { tv } from 'tailwind-variants'

export const boxStyle = tv({
  base: 'bg-white',
  variants: {
    border: {
      true: 'border border-gray-200',
    },
    rounded: {
      sm: 'rounded-lg',
      md: 'rounded-2xl',
    },
    padding: {
      xs: '',
      sm: '',
      md: 'p-6',
      lg: 'p-8',
      xl: '',
    },
  },
})
