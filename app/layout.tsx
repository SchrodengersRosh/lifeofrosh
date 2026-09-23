import type { Metadata, Viewport } from 'next'
import { Newsreader } from 'next/font/google'
import { siteConfig } from '@/content/site'
import { RunSheet } from '@/components/show/RunSheet'
import { Footer } from '@/components/layout/Footer'
import { ShowProvider } from '@/components/show/ShowContext'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-newsreader',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s · Roshan',
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#0B0A09',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <div
          className="run-of-show-hairline"
          aria-hidden="true"
        />

        <ShowProvider>
          <RunSheet />
          <main id="main">{children}</main>
          <Footer />
        </ShowProvider>
      </body>
    </html>
  )
}