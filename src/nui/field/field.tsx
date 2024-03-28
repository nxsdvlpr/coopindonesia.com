import { FieldProps } from './types'

export default function Field({ children }: FieldProps) {
  return (
    <li className="py-0.5 leading-7 text-gray-700 first:pt-0 last:pb-0">
      {children}
    </li>
  )
}
