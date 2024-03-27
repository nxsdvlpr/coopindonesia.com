import { tv } from 'tailwind-variants'

export const testimonialStyle = tv({
  slots: {
    wrapper:
      'grid grid-flow-col gap-6 overflow-hidden hover:overflow-auto lg:gap-12',
    main: 'relative min-h-full w-[28.125rem] p-4 lg:p-8',
    boxImage:
      'w-20 h-20 lg:h-[6.25rem] lg:w-[6.25rem] overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center rounded-full',
    background:
      'absolute bottom-0 left-0 -z-10 h-60 w-60 rounded-xl bg-gray-50',
  },
})
