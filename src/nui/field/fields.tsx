import { Typo } from '../typo'
import { FieldsProps } from './types'

export default function Fields({ label, children }: FieldsProps) {
  return (
    <div className="flex flex-col gap-x-6 gap-y-3 lg:flex-row">
      {label && (
        <div className="shrink-0 lg:w-[11.75rem]">
          <Typo size="lg" fontWeight="semibold" color="gray-900">
            {label}
          </Typo>
        </div>
      )}
      <ul className=" list-disc py-0.5 pl-4 text-base marker:bg-gray-700 lg:text-lg">
        {children}
      </ul>
    </div>
  )
}
