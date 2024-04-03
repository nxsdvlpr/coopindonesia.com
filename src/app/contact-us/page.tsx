import ContactUs from '@/features/contact-us/contact-us'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us / LPK Coop Indonesia',
  description: 'Contact Us / LPK Coop Indonesia',
}

export default function Page() {
  return <ContactUs />
}
