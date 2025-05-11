import Image from "next/image";
import React from "react";
import PieChart from "@/public/images/pie-chart.svg";
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
      <h1 className="font-extrabold text-4xl tracking-[-0.61px] text-[#E2E8F0] mb-[25px] text-center relative z-[2] md:text-[64px] md:leading-[72px]">
        Tokenomics
      </h1>
      <div className="-mt-10 mx-auto lg:-mt-40">
        <Image
          src={PieChart}
          alt="Tokenomics"
          width={2573.63}
          height={917}
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default Tokenomics;
