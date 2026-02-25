import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emmanuel Nwalozie',
  description:
    'USC student, dual athlete, and poet. Defensive end, sprinter, student government. Los Angeles.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Emmanuel Nwalozie',
    description: 'Athlete. Poet. Trojan.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Nwalozie',
    description: 'Athlete. Poet. Trojan.',
  },
  other: {
    'theme-color': '#080808',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#080808" />
      </head>
      <body
        className="bg-[#080808] text-white antialiased overflow-x-hidden font-body"
        suppressHydrationWarning
      >
        {/* Skip navigation for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#C9A46A] focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
