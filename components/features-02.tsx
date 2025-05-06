import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

import SolcypherAIAgent from "@/public/images/solcypher-ai-agent.png";
import CelebrityCheckIcon from "@/public/images/celebrity-check.svg";
import ConfigurableIcon from "@/public/images/configurable.svg";
import AdaptableIcon from "@/public/images/adaptable.svg";

export default function Features02() {
  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={6}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-32">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Faster. Smarter.
            </h2>
            <p className="text-lg text-slate-400">
              Tired of trying to find the next new token launch? Take control
              with your very own AI agent dedicated to finding you the token
              launches worth looking into, save hours of time filtering through
              thousands of tokens and get notified instantly on the lp launches
              worth trading.
            </p>
          </div>

          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
            {/* Blurred shape */}
            <div
              className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid md:grid-cols-12 gap-6 group">
              {/* Box #1 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
                      {/* Radial gradient */}
                      <div
                        className="absolute flex items-center justify-center bottom-[80px] translate-y-1/2 right-[90px] pointer-events-none -z-10 h-full aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" />
                        <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 md:p-8 md:pr-0">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                              SolCypher AI Agent
                            </h3>
                            <p className="text-slate-400">
                              Get key insights on every token launch with out
                              the hassle, key information such as X/Twitter
                              Hype, KOL Influence, Celebrity Backing etc.
                              directly in your SolCypher Bot.
                            </p>
                          </div>
                        </div>
                        <div>
                          <a
                            className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none py-2 px-4"
                            href="http://t.me/solcypher"
                            target="_blank"
                          >
                            <span className="relative inline-flex items-center">
                              Learn more{" "}
                              <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                -&gt;
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="relative w-full pt-[60px]">
                        <Image
                          src={SolcypherAIAgent}
                          width={437}
                          height={448}
                          className="mx-auto"
                          alt="Feature 01"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #3 */}
            </Highlighter>
          </div>

          {/* Features list */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature */}
            <div className="border border-[#ffffff1b] rounded-[12px] p-4">
              <div className="flex flex-col gap-3 mb-4">
                <Image
                  src={CelebrityCheckIcon}
                  width={44}
                  height={44}
                  alt="Celebrity Check"
                />
                <h4 className="font-medium text-slate-50">Celebrity Check</h4>
              </div>
              <p className="text-sm text-slate-400">
                Our AI detects if celebrity's are backing or buying tokens we
                signal, saving you time and allowing you to make decisions
                quicker.
              </p>
            </div>
            {/* Feature */}
            <div className="border border-[#ffffff1b] rounded-[12px] p-4">
              <div className="flex flex-col gap-3 mb-4">
                <Image
                  src={ConfigurableIcon}
                  width={44}
                  height={44}
                  alt="Configurable"
                />
                <h4 className="font-medium text-slate-50">Configurable</h4>
              </div>
              <p className="text-sm text-slate-400">
                Set your bot to auto buy/snipe tokens based on your preferences
                (Celebrity Buying, KOL Buying, X Hype, Socials Posted, Top 10
                Holders).
              </p>
            </div>
            {/* Feature */}
            <div className="border border-[#ffffff1b] rounded-[12px] p-4">
              <div className="flex flex-col gap-3 mb-4">
                <Image
                  src={AdaptableIcon}
                  width={44}
                  height={44}
                  alt="Adaptable"
                />
                <h4 className="font-medium text-slate-50">Adaptable</h4>
              </div>
              <p className="text-sm text-slate-400">
                Our AI agent adapts to the data it receives and past experience
                or results on previous signals, the more data it gathers the
                more accurate the signals get.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
