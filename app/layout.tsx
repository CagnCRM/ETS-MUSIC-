import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ETS Music | Enter The Shack',
  description: 'A creator-first music home from ETS WORLD Technologies.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
