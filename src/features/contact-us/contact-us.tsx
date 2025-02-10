import { Section, SectionTitle } from '@/nui'
import { useTranslations } from 'next-intl'
import { AskedQuestion } from '../shared'
import ContactUsAddress from './address'
import ContactUsForm from './form'

export default function ContactUs() {
  const t = useTranslations()
  return (
    <>
      <Section>
        <SectionTitle
          sizeTitle="6xl"
          info={t('contactUsPage.info')}
          title={t('contactUsPage.title')}
        />
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
