import { tv } from 'tailwind-variants'

export const typoStyle = tv({
  variants: {
    size: {
      '6xl':
        'text-5xl lg:text-6xl font-sans-alt !font-semibold lg:!font-bold tracking-tight',
      '5xl': 'text-4xl lg:text-5xl font-sans-alt tracking-tight',
      '3xl': 'text-2xl lg:text-3xl tracking-tight',
      '2xl': 'text-xl lg:text-2xl tracking-tight',
      xl: 'text-lg lg:text-xl',
      lg: 'text-base lg:text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    color: {
      black: 'text-black',
      'gray-900': 'text-gray-900',
      'gray-700': 'text-gray-700',
      'gray-500': 'text-gray-500',
      'gray-400': 'text-gray-400',
      'primary-500': 'text-primary-500',
      'primary-600': 'text-primary-600',
      'primary-700': 'text-primary-700',
    },
  },
})
