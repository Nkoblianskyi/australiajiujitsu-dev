import type { Metadata, Viewport } from 'next'
import { Noto_Sans_SC, Noto_Serif_SC, Bebas_Neue } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/cookie-banner'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
})

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: {
    default: '澳大利亚柔术 | Australia Jiujitsu',
    template: '%s | 澳大利亚柔术',
  },
  description:
    '探索柔术的世界：历史、规则、技术与训练指南。澳大利亚柔术综合信息平台。',
  keywords: ['柔术', '巴西柔术', 'BJJ', '武术', '格斗技术', '澳大利亚'],
  metadataBase: new URL('https://australiajiujitsu.com'),
  openGraph: {
    siteName: '澳大利亚柔术',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#74ACDF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh"
      className={`bg-background ${notoSansSC.variable} ${notoSerifSC.variable} ${bebasNeue.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
