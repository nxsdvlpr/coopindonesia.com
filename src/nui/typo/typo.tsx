import { TypoProps } from './types'
import { typoStyle } from './typo.style'

export function Typo({
  size = 'sm',
  fontWeight = 'normal',
  color = 'gray-700',
  children,
}: TypoProps) {
  return (
    <div className={typoStyle({ size, fontWeight, color })}>{children}</div>
  )
}
