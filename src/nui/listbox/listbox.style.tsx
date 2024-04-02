import { Variants } from 'framer-motion'
import { tv } from 'tailwind-variants'

export const variantListbox: Variants = {
  open: (height = 100) => ({
    height: `${height}%`,
    opacity: 1,
    transition: {
      type: 'keyframes',
      stiffness: 100,
      restDelta: 0,
    },
  }),
  closed: {
    transition: {
      delay: 0,
      type: 'keyframes',
      stiffness: 100,
      damping: 0,
    },
  },
}

export const listboxStyle = tv({
  base: 'h-0 overflow-hidden',
})
