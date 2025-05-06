import Image from 'next/image'
import Particles from './particles'

import Client01 from '@/public/images/client-01.svg'
import Client02 from '@/public/images/client-02.svg'
import Client03 from '@/public/images/client-03.png'
import Client04 from '@/public/images/client-04.png'
import Client05 from '@/public/images/client-05.webp'

const logos = [
  { src: Client01, alt: "Client 01", width: 64 },
  { src: Client02, alt: "Client 02", width: 46 },
  { src: Client03, alt: "Client 03", width: 196 },
  { src: Client04, alt: "Client 04", width: 46 },
  { src: Client05, alt: "Client 05", width: 128 }
];

export default function Clients() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-20">
          <div className="overflow-hidden">
            <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                {logos.map((logo, index) => (
                  <li key={index}>
                    <Image src={logo.src} alt={logo.alt} width={logo.width}/>
                  </li>
                ))}
              </ul>
              <ul
                className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                aria-hidden="true"
              >
                {logos.map((logo, index) => (
                  <li key={index}>
                    <Image src={logo.src} alt={logo.alt} width={logo.width} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}