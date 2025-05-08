import Particles from './particles'

export default function Hero() {
  return (
    <section className="bg-[url(/images/hero.png)] bg-no-repeat bg-cover bg-[100%] relative w-full md:bg-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 z-0" />

        <div className="relative z-1 pt-[200px] pb-[200px] lg:pt-[258px] lg:pb-[520px]">
          {/* Hero content */}
          <div className="max-w-[85%] lg:max-w-[40%]">
            <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
                <a className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-purple-500),var(--color-purple-500))_padding-box,linear-gradient(var(--color-purple-500),var(--color-purple-200)_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow-sm" target="_blank" href="https://t.me/solcypher_bot">
                  <span className="relative inline-flex items-center">
                    Launch Telegram Bot <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </span>
                </a>
              </div>
            </div>
            <h1 className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">Social trading protocol with AI driven insights</h1>
            <p className="text-lg text-slate-300 mb-8" data-aos="fade-down" data-aos-delay="200">SolCypher Trading Bot is a complete trading solution with Snipe Trading, Auto Trading and Copy Trading. We have a full fleet of features including laddered take profit and trailing stop loss.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
              <div>
                <a className="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group py-3 px-[15px]" target="_blank" href="https://t.me/solcypher_portal">
                  Join The Community Chat <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </a>
              </div>
              <div>
                <a className="btn text-slate-200 hover:text-white bg-[#ffffff33] hover:bg-slate-900/30 w-full transition duration-150 ease-in-out py-3 px-[15px]" target="_blank" href="https://docs.solcypher.ai">
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Read the docs</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='block absolute h-[150px] bottom-0 w-full right-0 -bg-linear-180 from-[#0f172b00] from-0% to-[#0F172B] to-[53.38%]'></div>

    </section>
  )
}