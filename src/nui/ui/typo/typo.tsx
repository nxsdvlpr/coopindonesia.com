import { TypoProps } from './types'
import { typoStyle } from './typo.style'

export function Typo({ size, color = 'gray-700', children }: TypoProps) {
  return <div className={typoStyle({ size, color })}>{children}</div>
}
