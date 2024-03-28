import { tv } from 'tailwind-variants'

export const footerLinkStyle = tv({
  slots: {
    wrapper:
      'group flex items-center gap-2 font-semibold text-gray-500 hover:text-gray-700',
    box: 'w-4 overflow-hidden',
    image: 'h-auto w-full grayscale group-hover:grayscale-0',
  },
})
