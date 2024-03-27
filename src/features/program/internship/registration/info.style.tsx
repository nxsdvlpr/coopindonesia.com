import { tv } from 'tailwind-variants'

export const infoStyle = tv({
  slots: {
    wrapper:
      'flex flex-col gap-3 rounded-lg border border-dashed border-primary-500 bg-primary-25 p-6',
    main: 'flex flex-col gap-4 lg:flex-row',
    icon: 'h-fit w-fit rounded-full bg-green-500 p-1 text-white',
  },
})
