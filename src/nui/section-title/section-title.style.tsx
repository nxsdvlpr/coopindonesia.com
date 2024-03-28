import { tv } from 'tailwind-variants'

export const sectionTitleStyle = tv({
  slots: {
    wrapper: 'flex flex-col items-center text-center',
    container: 'flex flex-col gap-2 text-center',
    main: 'max-w-[50rem] mx-auto text-center',
  },
})
