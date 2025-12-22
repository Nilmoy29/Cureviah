import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
})

export const metadata: Metadata = {
  title: 'Cureviah - Cross-Border Medical Tourism Platform',
  description: 'Connect with certified hospitals and clinics in South Korea and other affordable destinations for high-quality medical services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {/* Header and Footer are client components, so they need to be imported dynamically */}
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 