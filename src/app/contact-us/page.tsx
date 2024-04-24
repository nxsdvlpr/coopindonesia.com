import ContactUs from '@/features/contact-us/contact-us'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us / LPK COOP Indonesia',
  description: 'Contact Us / LPK COOP Indonesia',
}

export default function Page() {
  return <ContactUs />
}
