import Image from "next/image";
import UltimateTelegramBotImage from "@/public/images/ultimate-telegram-bot.png";

export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between flex-col gap-5 relative px-8 pt-12 md:pt-20 overflow-hidden border border-[#ffffff1b] rounded-[12px] lg:flex-row">
          {/* Radial gradient */}
          <div
            className="absolute flex items-center justify-center -bottom-[70px] right-0 pointer-events-none -z-10 w-2/5 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" />
            <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" />
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
                The Ultimate Telegram Bot For Solana
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Take control of on-chain trading
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Trade today and take advantage of all of our great features at
              absolutely no cost. We charge a one percent transaction fee and
              offer our services at no additional cost.
            </p>
            <div>
              <a
                className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none py-2 px-4"
                href="http://t.me/solcypher_bot"
                target="_blank"
              >
                <span className="relative inline-flex items-center">
                  Get Started{" "}
                  <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="w-full self-center mt-10 lg:mt-0">
            <Image
              src={UltimateTelegramBotImage}
              alt="The Ultimate Telegram Bot For Solana"
              width={500}
              height={420}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
