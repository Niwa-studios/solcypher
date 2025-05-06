import './css/style.css'

import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'SolCypher - Solana Trading Bot',
  description: 'SolCypher is a trading bot for the Solana blockchain. It is designed to help you automate your trading strategies and make the most of your investments. Complete with Take Profit, Trailing Stop Loss, Moonbag, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Analytics/>
        </div>
      </body>
    </html>
  )
}
