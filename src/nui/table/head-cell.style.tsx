import { tv } from 'tailwind-variants'

export const tableHeadCellStyle = tv({
  base: 'w-[300px] px-6 py-8',
  variants: {
    background: {
      true: ' bg-primary-25',
    },
  },
})
