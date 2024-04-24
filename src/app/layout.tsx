import Layout from '@/nui/layout/default'
import type { Metadata } from 'next'
import 'react-photo-view/dist/react-photo-view.css'
import './globals.css'
export const metadata: Metadata = {
  title: 'Home / LPK COOP Indonesia',
  description: 'Home / LPK COOP Indonesia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Layout>{children}</Layout>
    </html>
  )
}
