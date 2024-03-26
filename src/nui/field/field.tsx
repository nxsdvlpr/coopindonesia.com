import { FieldProps } from './types'

export default function Field({ children }: FieldProps) {
  return <li className="leading-6 text-gray-700">{children}</li>
}
