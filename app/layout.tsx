import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barbie Dress Up',
  description: 'Style your Barbie doll with beautiful outfits and accessories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
