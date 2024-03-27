import { tv } from 'tailwind-variants'

export const homeSponsorStyle = tv({
  slots: {
    wrapper: 'flex flex-col items-center gap-6 text-center lg:gap-14',
    main: 'flex flex-wrap items-center justify-center gap-6 lg:gap-24',
  },
})
