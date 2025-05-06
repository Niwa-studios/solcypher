export const metadata = {
  title: 'SolCypher - Solana Trading Bot',
  description: 'SolCypher is a trading bot for the Solana blockchain. It is designed to help you automate your trading strategies and make the most of your investments. Complete with Take Profit, Trailing Stop Loss, Moonbag, and more.',
}

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
      {/* <Features03 /> */}
      <TestimonialsCarousel />
      <Features04 />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  )
}
