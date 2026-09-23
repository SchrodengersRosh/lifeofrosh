import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { siteConfig } from '@/content/site'
import { RunSheet } from '@/components/show/RunSheet'
import { Footer } from '@/components/layout/Footer'
import { ShowProvider } from '@/components/show/ShowContext'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s \u00b7 Roshan',
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${GeistSans.variable} antialiased`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ShowProvider>
          <RunSheet />
          <main id="main">{children}</main>
          <Footer />
        </ShowProvider>
      </body>
    </html>
  )
}
