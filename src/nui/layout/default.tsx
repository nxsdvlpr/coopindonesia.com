import { epilogue, hankenGrotesk } from '@/font/font'
import { Footer, Header } from '@/nui'
import { ReactNode } from 'react'

export type LayoutProps = {
  children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <body
      className={`${hankenGrotesk.variable} ${epilogue.variable} font-sans text-sm`}
      suppressHydrationWarning
    >
      <link rel="icon" href="/logo.png" sizes="any" />
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  )
}
