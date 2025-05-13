import Image from "next/image";
import React from "react";
import PieChartCropped from "@/public/images/pie-chart-cropped.png";
import CallBotTopBg from "@/public/images/call-bot-bg.png";

function Tokenomics() {
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
    </section>
  );
}

export default Tokenomics;
