import Layout from '@/nui/layout/default'
import type { Metadata } from 'next'
import { getMessages } from 'next-intl/server'
import 'react-photo-view/dist/react-photo-view.css'
import './globals.css'
export const metadata: Metadata = {
  title: 'Home / LPK COOP Indonesia',
  description: 'Home / LPK COOP Indonesia',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <Layout messages={messages}>{children}</Layout>
    </html>
  )
}
