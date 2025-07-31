import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'K4NIz',
  description: 'Portfolio website showcasing my work and skills',
  icons: {
    icon: '/logo.jpg', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
