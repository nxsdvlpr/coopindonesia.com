import { tv } from 'tailwind-variants'

export const sectionStyle = tv({
  base: 'mb-16 lg:mb-[7.5rem]',
  variants: {
    variant: {
      none: 'bg-none',
      gray: 'bg-gray-50 py-14',
    },
  },
})

export const sectionMainStyle = tv({
  base: 'm-auto px-4 lg:px-10',
  variants: {
    maxWidth: {
      md: 'max-w-2xl lg:max-w-[80rem]',
      sm: 'max-w-2xl lg:max-w-[50rem]',
    },
  },
})
