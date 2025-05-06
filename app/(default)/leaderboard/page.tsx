export const metadata = {
  title: 'SolCypher - Solana Trading Bot - Leaderboard',
  description: 'SolCypher is a trading bot for the Solana blockchain. It is designed to help you automate your trading strategies and make the most of your investments. Complete with Take Profit, Trailing Stop Loss, Moonbag, and more.',
}

import Hero from '@/components/hero-about'
import Cta from '@/components/cta'

export default function About() {
  return (
    <>
      <Hero />
      {/* <Story />
      <Team />
      <Recruitment />
      <Testimonials /> */}
      <Cta />
    </>
  )
}
