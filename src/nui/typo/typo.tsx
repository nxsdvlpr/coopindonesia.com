import { As, clsx, forwardRef } from '../../utils'
import { TypoProps, TypoSize } from './types'
import { typoStyle } from './typo.style'

export const Typo = forwardRef<'div', TypoProps>(
  (
    {
      as,
      size = 'sm',
      fontWeight = 'normal',
      color = 'gray-700',
      children,
      className,
      ...otherProps
    },
    ref
  ) => {
    const headingMap: Record<TypoSize, As> = {
      '6xl': 'h1',
      '5xl': 'h2',
      '3xl': 'h3',
      '2xl': 'h4',
      xl: 'h5',
      lg: 'div',
      md: 'div',
      sm: 'div',
      xs: 'div',
    }

    const Component = !as ? headingMap[size] : as

    return (
      <Component
        ref={ref}
        className={clsx(className, typoStyle({ size, fontWeight, color }))}
        {...otherProps}
      >
        {children}
      </Component>
    )
  }
)
