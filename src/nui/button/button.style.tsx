import { tv } from 'tailwind-variants'

export const buttonStyle = tv({
  base: 'font-semibold text-white bg-primary-500 rounded-full hover:bg-primary-600',
  variants: {
    size: {
      sm: 'text-sm py-2 px-3.5',
      md: 'text-base py-3 px-5',
    },
    wider: {
      none: '',
      sm: 'min-w-[6.5625rem]',
    },
  },
})
