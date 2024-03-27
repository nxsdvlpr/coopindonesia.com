import { tv } from 'tailwind-variants'

export const copyrightStyle = tv({
  slots: {
    wrapper: 'pt-8',
    main: 'flex flex-col justify-between gap-y-8 lg:flex-row',
  },
})
