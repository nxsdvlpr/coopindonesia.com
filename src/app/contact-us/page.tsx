import ContactUs from '@/features/contact-us/contact-us'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia - Contact Us',
  description: 'LPK Coop Indonesia - Contact Us',
}

export default function Page() {
  return <ContactUs />
}
