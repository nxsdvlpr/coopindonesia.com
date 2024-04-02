import { tv } from 'tailwind-variants'

export const pathVariants = {
  top: {
    closed: { d: 'M 2 2.5 L 20 2.5' },
    open: { d: 'M 3 16.5 L 17 2.5' },
  },
  middle: {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  },
  bottom: {
    closed: { d: 'M 2 16.346 L 20 16.346' },
    open: { d: 'M 3 2.5 L 17 16.346' },
  },
}

export const toggleStyle = tv({
  base: 'relative z-20 flex items-center justify-center rounded-lg p-2 text-gray-900 hover:bg-gray-100',
})
