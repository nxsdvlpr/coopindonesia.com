import Layout from '@/nui/layout/default'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LPK Coop Indonesia',
  description: 'LPK Coop Indonesia',
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
