import { tv } from 'tailwind-variants'

export const bannerStyle = tv({
  slots: {
    wrapper: `h-fit w-full rounded-lg bg-[url('/banner/banner-bg-image.svg')] p-6 lg:p-10`,
    container: 'flex flex-col gap-y-6 lg:flex-row lg:gap-x-12',
    box: 'shrink-0 overflow-hidden rounded-lg bg-primary-200 p-6 lg:w-[25rem]',
    image: 'h-full w-full',
  },
})
