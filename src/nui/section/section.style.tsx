import { tv } from 'tailwind-variants'

export const sectionStyle = tv({
  base: 'mb-[7.5rem]',
  variants: {
    variant: {
      none: 'bg-none',
      gray: 'bg-gray-50 py-14',
    },
  },
})

export const sectionMainStyle = tv({
  base: 'm-auto px-10',
  variants: {
    maxWidth: {
      base: 'max-w-[80rem]',
      content: 'max-w-[50rem]',
    },
  },
})
