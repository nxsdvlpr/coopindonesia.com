import { tv } from 'tailwind-variants'

export const typoStyle = tv({
  variants: {
    size: {
      '6xl': 'text-6xl font-extrabold font-mono',
      '5xl': 'text-5xl font-bold font-mono',
      xl: 'text-xl font-bold',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
    color: {
      black: 'text-black',
      'gray-900': 'text-gray-900',
      'gray-700': 'text-gray-700',
      'gray-500': 'text-gray-500',
      'gray-400': 'text-gray-400',
    },
  },
})
