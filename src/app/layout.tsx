import Layout from '@/nui/layout/default'
import type { Metadata } from 'next'
import 'react-photo-view/dist/react-photo-view.css'
import './globals.css'
export const metadata: Metadata = {
  title: 'Home / LPK Coop Indonesia',
  description: 'Home / LPK Coop Indonesia',
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
