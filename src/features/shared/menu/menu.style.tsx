import { tv } from 'tailwind-variants'

export const wrapperMenuStyle = tv({
  base: 'flex flex-col items-center justify-center gap-6 border-t border-gray-200 pt-14',
  variants: {
    borderBottom: {
      true: 'border-b  pb-[7.5rem]',
      false: '',
    },
  },
})

export const menustyle = tv({
  slots: {
    container: 'flex flex-wrap items-center justify-center gap-3',
  },
})

export const menuLinkstyle = tv({
  base: 'rounded-full  px-[1.125rem] py-2.5 ',
  variants: {
    isActive: {
      true: 'font-semibold bg-primary-25 text-primary-500',
      false: 'bg-gray-100 font-medium text-gray-700',
    },
  },
})
