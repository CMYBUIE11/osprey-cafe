import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Osprey Cafe — Queen West, Toronto',
  description:
    'Coffee, baked goods, and breakfast sandwiches at Queen W and Roncesvalles. Open daily until 6 PM.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="bg-[#F7F2E8] text-[#2C1F14] antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
