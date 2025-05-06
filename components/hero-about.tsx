"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/page-illustration.svg'
import AboutIllustration from '@/public/images/about-illustration.svg'
import Icon from '@/public/images/about-icon.svg'

interface LeaderboardItem {
  _id: string;
  totalPnl: number;
}

export default function HeroAbout() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([])

  useEffect(() => {
    axios.get('/api/leaderboard')
      .then((response) => {
        console.log(response)
        setLeaderboard(response.data.slice(0, 10)) // Get only the first 10 records
      })
  }, [])

  const formatId = (id: string) => {
    return `${id.slice(0, 4)}...${id.slice(-4)}`
  }

  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={10} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40">

          {/* Hero content */}
          <div className="text-center">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">The winners of the month</div>
            <h1 className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">Leaderboards</h1>
            {/* Rings illustration */}
            <div className="inline-flex items-center justify-center relative">
              {/* Particles animation */}
              <div className="absolute inset-0 -z-10" aria-hidden="true">
                <canvas data-particle-animation data-particle-quantity="10"></canvas>
              </div>
              <div className="inline-flex [mask-image:_radial-gradient(circle_at_bottom,transparent_15%,black_70%)]">
                <Image src={AboutIllustration} width={446} height={446} alt="About illustration" />
              </div>
              <Image className="absolute mt-[30%] drop-shadow-lg animate-float" src={Icon} width={72} height={72} alt="About icon" />
            </div>
          </div>

          {/* Leaderboard table */}
          <div className="mt-10">
            <table style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', color: 'white', padding: '20px', borderRadius: '10px', backgroundImage: 'linear-gradient(135deg, #7648a9, #4b3e9d)' }} className="min-w-full">
              <thead>
                <tr>
                  <th style={{ color: 'white', padding: '10px 20px' }} className="border-b border-gray-200">Address</th>
                  <th style={{ color: 'white', padding: '10px 20px' }} className="border-b border-gray-200">Total PnL</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item, index) => (
                  <tr key={index}>
                    <td style={{ color: 'white', textAlign: 'center', padding: '10px 20px', borderBottom: 'none' }}>{formatId(item._id)}</td>
                    <td style={{ color: 'lime', textAlign: 'center', padding: '10px 20px', borderBottom: 'none' }}>{item.totalPnl.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </section>
  )
}