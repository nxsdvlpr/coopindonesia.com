import { tv } from 'tailwind-variants'

export const buttonStyle = tv({
  base: 'font-semibold text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:bg-primary-600',
  variants: {
    size: {
      sm: 'text-sm py-2 px-3.5',
      md: 'text-base py-3 px-5',
    },
    wider: {
      none: '',
      sm: 'w-[6.5625rem]',
      md: 'w-[17rem]',
    },
    rounded: {
      full: 'rounded-full',
      lg: 'rounded-lg',
    },
  },
})
