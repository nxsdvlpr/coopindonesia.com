import { Flexbox } from '../flexbox'
import { Typo } from '../typo'
import { FieldsProps } from './types'

export default function Fields({ label, children }: FieldsProps) {
  return (
    <Flexbox align="normal" gap="lg">
      {label && (
        <div className="w-[11.75rem] shrink-0">
          <Typo size="md" fontWeight="semibold" color="gray-900">
            {label}
          </Typo>
        </div>
      )}
      <ul className="list-disc py-0.5 pl-4">{children}</ul>
    </Flexbox>
  )
}
