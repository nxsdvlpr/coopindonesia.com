import { Section, SectionTitle } from '@/nui'
import { AskedQuestion } from '../shared'
import ContactUsAddress from './address'
import ContactUsForm from './form'

export default function ContactUs() {
  return (
    <>
      <Section>
        <SectionTitle sizeTitle="6xl" info="Contact Us" title="Contact Us" />
      </Section>
      <Section>
        <div className="flex flex-col items-start justify-between gap-16 rounded-lg bg-gray-50 p-4 lg:flex-row lg:p-16">
          <ContactUsForm />
          <ContactUsAddress />
        </div>
      </Section>
      <AskedQuestion />
    </>
  )
}
