import { tv } from 'tailwind-variants'

export const contactUsFormStyle = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-8 rounded-lg bg-white p-10',
    stack: 'grid gap-8 lg:grid-cols-2',
  },
})
