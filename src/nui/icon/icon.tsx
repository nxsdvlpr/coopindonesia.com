'use client'

import { Icon as Iconify } from '@iconify/react'
import { sizes } from './icon.style'
import { IconProps } from './types'

export function Icon({
  icon = 'lucide:circle',
  size = 'md',
  stroke = 'sm',
}: IconProps) {
  return (
    <Iconify
      stroke="1.5"
      icon={icon}
      width={sizes[size]}
      height={sizes[size]}
    />
  )
}
