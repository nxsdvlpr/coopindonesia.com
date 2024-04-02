import { Variants } from 'framer-motion'
import { tv } from 'tailwind-variants'

export const sidebar: Variants = {
  open: (width = 100) => ({
    height: '100vh',
    width: `${width}%`,
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 1,
    },
  }),
  closed: {
    height: '100vh',
    transition: {
      delay: 0,
      type: 'spring',
      stiffness: 100,
      damping: 0,
    },
  },
}

export const sidebarStyle = tv({
  base: 'absolute bottom-0 right-0 top-0 z-20 w-0 bg-white overflow-hidden',
})
