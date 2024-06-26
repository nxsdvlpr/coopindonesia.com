import { tv } from 'tailwind-variants'

export const flexboxStyle = tv({
  base: 'flex',
  variants: {
    flow: {
      col: 'flex-col',
      row: 'flex-row',
    },
    gap: {
      none: 'gap-0',
      '2xs': 'gap-2',
      xs: 'gap-3',
      sm: 'gap-4',
      md: 'gap-5',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-6 lg:gap-12',
      '3xl': 'gap-7 lg:gap-14',
      '4xl': 'gap-10 lg:gap-24',
    },
    align: {
      normal: '',
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    justify: {
      normal: 'justify-normal',
      start: 'justify-start',
      between: 'justify-between',
      end: 'justify-end',
    },
  },
})
