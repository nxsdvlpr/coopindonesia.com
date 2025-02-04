import { epilogue, hankenGrotesk } from '@/font/font'
import { Footer, Header } from '@/nui'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

export type LayoutProps = {
  messages: AbstractIntlMessages
  children?: ReactNode
}

export default function Layout({ messages, children }: LayoutProps) {
  return (
    <body
      className={`${hankenGrotesk.variable} ${epilogue.variable} font-sans text-sm`}
      suppressHydrationWarning
    >
      <NextIntlClientProvider messages={messages}>
        {/* <AutoLanguage /> */}
        <link rel="icon" href="/logo.png" sizes="any" />
        <Header />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </body>
  )
}
