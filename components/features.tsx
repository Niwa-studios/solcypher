"use client";

import { useState } from "react";

import Image from "next/image";
import Illustration from "@/public/images/feature-container-gradient.png";
import CopyTrading from "@/public/images/copy-trading.png";
import SnipeTrading from "@/public/images/snipe-trading.png";
import AutoTrading from "@/public/images/auto-trading.png";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const getFeatureImage = () => {
    if (tab === 1) {
      return CopyTrading;
    }

    if (tab === 2) {
      return SnipeTrading;
    }

    return AutoTrading;
  };

  return (
    <section className="!rounded-4xl relative mx-8">
      <div className="absolute left-0 w-full top-0 right-0 -z-10">
        <Image
          src={Illustration}
          className="w-full"
          width={1320}
          height={453}
          alt="Features Illustration"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div>
            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col-reverse md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div
                className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center"
                data-aos="fade-down"
              >
                {/* Content #1 */}
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
                    Speed matters with on-chain trading
                  </div>
                </div>
                <h3 className="h3 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                  Instant swaps and custom risk control
                </h3>
                <p className="text-lg text-slate-400 mb-8">
                  Define your custom Take Profit, Stop Loss & Trailing Stop Loss
                  and have them set for every swap you make.
                </p>
                <div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 1
                        ? "border-slate-700 opacity-50"
                        : "border-purple-700 shadow-sm shadow-purple-500/25"
                    }`}
                    onClick={() => setTab(1)}
                  >
                    <svg
                      className="shrink-0 fill-slate-300 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span>Copy Trading</span>
                  </button>
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 2
                        ? "border-slate-700 opacity-50"
                        : "border-purple-700 shadow-sm shadow-purple-500/25"
                    }`}
                    onClick={() => setTab(2)}
                  >
                    <svg
                      className="shrink-0 fill-slate-300 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                    </svg>
                    <span>Snipe Trading</span>
                  </button>
                  <button
                    className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 3
                        ? "border-slate-700 opacity-50"
                        : "border-purple-700 shadow-sm shadow-purple-500/25"
                    }`}
                    onClick={() => setTab(3)}
                  >
                    <svg
                      className="shrink-0 fill-slate-300 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                    </svg>
                    <span>Auto Trading & Sniping</span>
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                className="overflow-hidden mt-10 md:overflow-auto md:mt-0 md:w-1/2 lg:w-1/2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={getFeatureImage()}
                  width={509.5}
                  height={841}
                  alt="Feature image"
                  className="mx-auto -mr-10 md:mr-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl pb-40 py-20 pt-0 mx-auto text-center">
          <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
            Stake $CYPHER Chart
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Stakers earn 100% of SolCypher bot profits & 89% of LP fees. Rewards
            are distributed weekly
          </p>
          <div>
            <a
              className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none py-2 px-4"
              href="https://gofundmeme.io/campaigns/iQbAiVeCbyGJBbrxwxEa7LYSykSGd5FMVshgeRayGFM"
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
        <h3 className="h3 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-12 pt-3 text-center">
          Web App & Trading Terminal
        </h3>
        {/* .MOV Video */}
        <div className="inset-0 -z-10">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/dapp.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
