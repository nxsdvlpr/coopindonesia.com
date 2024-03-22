import { figtree, mulish } from '@/font/font'
import { Footer, Header } from '@/nui'
import { ReactNode } from 'react'

export type LayoutProps = {
  children?: ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <body
      className={`${figtree.variable} ${mulish.variable} font-sans text-sm`}
    >
      <Header />
      <div>{children}</div>
      <Footer />
    </body>
  )
}
