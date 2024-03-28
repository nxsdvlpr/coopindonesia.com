import { Checkbox, Input, Textarea } from '@/nui'
import { contactUsFormStyle } from './form.style'

export default function ContactUsForm() {
  const { wrapper, stack } = contactUsFormStyle()

  return (
    <div className={wrapper()}>
      <div className={stack()}>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </div>
      <Input placeholder="you@company.com" />
      <Textarea placeholder="Enter a description..." />
      <div className="flex items-center">
        <Checkbox label="You agree to our friendly" />
        <span className="ml-1 mt-0.5 font-semibold text-primary-600">
          privacy policy.
        </span>
      </div>
      <button className="mt-2 max-w-[17rem] rounded-lg bg-primary-600 px-7 py-2.5 text-sm font-semibold text-white hover:bg-primary-700">
        Send message
      </button>
    </div>
  )
}
