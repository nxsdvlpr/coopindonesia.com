import { tv } from 'tailwind-variants'

export const homePublicationStyle = tv({
  slots: {
    imageBox: 'overflow-hidden rounded-lg',
    main: 'flex flex-col justify-between gap-6 lg:flex-row',
    boxInstagram: 'grid grid-cols-2 gap-4 lg:gap-6',
    boxInstagramImage:
      'overflow-hidden rounded-lg lg:h-[11.875rem] lg:w-[11.875rem]',
    boxYoutube: 'grid gap-6 lg:grid-cols-2',
    boxYoutubeImage:
      'overflow-hidden rounded-lg lg:h-[11.875rem] lg:w-[21.25rem]',
  },
})
