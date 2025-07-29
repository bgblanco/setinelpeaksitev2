import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Sentinel Peak Solutions - Digital Marketing & Web Development',
  description: 'Professional web design, social media management, and reputation services for growing businesses. Transform your digital presence with our comprehensive solutions.',
  keywords: 'web design, social media management, reputation management, digital marketing, business growth',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}