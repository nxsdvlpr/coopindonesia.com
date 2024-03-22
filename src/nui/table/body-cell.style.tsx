import { tv } from 'tailwind-variants'

export const tableBodyCellStyle = tv({
  base: 'px-6 py-8 align-top',
  variants: {
    background: {
      true: ' bg-primary-25',
    },
  },
})
