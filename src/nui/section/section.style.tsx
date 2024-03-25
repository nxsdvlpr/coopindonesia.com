import { tv } from 'tailwind-variants'

export const sectionStyle = tv({
  base: 'mb-[7.5rem]',
  variants: {
    variant: {
      white: 'bg-white',
      gray: 'bg-gray-50 py-14',
    },
  },
})
