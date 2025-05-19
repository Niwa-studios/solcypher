"use client";

import Image from "next/image";
import React from "react";
import PieChartCropped from "@/public/images/pie-chart-cropped.png";
import CallBotTopBg from "@/public/images/call-bot-bg.png";
import CopyIcon from "@/public/images/copy.svg";
import toast from "react-hot-toast";

function Tokenomics() {

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("$CYPHER - iQbAiVeCbyGJBbrxwxEa7LYSykSGd5FMVshgeRayGFM");
      toast.success("Copied contract address")
    } catch (err) {
      toast.error("Something went wrong")
    }
  };

  return (
    <section className="bg-[#0F172B] pt-[100px] pb-10 relative lg:pt-[200px]">
      <div className="absolute top-0 w-full z-0 opacity-30">
        <Image
          src={CallBotTopBg}
          width={2600}
          height={300}
          alt="gradient shape"
        />
      </div>
      <h1
        data-aos="fade-down"
        className="font-extrabold text-4xl tracking-[-0.61px] text-[#E2E8F0] mb-[25px] text-center relative z-[2] md:text-[64px] md:leading-[72px]"
      >
        Tokenomics
      </h1>
      <div data-aos="fade-up" className="-mt-10 mx-auto lg:-mt-16">
        <Image
          src={PieChartCropped}
          alt="Tokenomics"
          width={1267}
          height={726}
          layout="responsive"
        />
      </div>

      <div className="pt-8 px-[2%]">
        <h3 className="h3 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-12 pt-3 text-center">
          Contract Address
        </h3>
        <div className="flex gap-3.5 items-center border border-[#ffffff1b] rounded-[100px] w-full max-w-fit mx-auto py-6 px-6 bg-[#141c3073] backdrop-blur-md">
          <h3 className="text-white text-sm text-center truncate max-w-[80%]">$CYPHER - iQbAiVeCbyGJBbrxwxEa7LYSykSGd5FMVshgeRayGFM</h3>
          <button onClick={copyToClipboard} className="cursor-pointer rounded-full bg-transparent duration-150 p-3 hover:bg-[#0f172bae]">
            <Image src={CopyIcon} width={24} height={24} alt="Copy" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
