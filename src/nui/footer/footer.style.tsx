import { tv } from 'tailwind-variants'

export const footerStyle = tv({
  slots: {
    wrapper: 'border-t border-gray-200',
    container:
      'm-auto flex max-w-2xl flex-col gap-16 divide-y divide-gray-200 px-10 pb-12 pt-16 lg:max-w-[80rem]',
    main: 'flex flex-col justify-between gap-y-8 lg:flex-row',
  },
})
