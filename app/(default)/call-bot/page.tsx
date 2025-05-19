import Image from "next/image";
import Link from "next/link";
import React from "react";
import CallBotTopBg from "@/public/images/call-bot-bg.png";
import CallBotBottomBg from "@/public/images/call-bot-pattern.svg";
import CallBotDemo from "@/public/images/call-bot-demo.png";

function CallBotPage() {
  return (
    <section className="bg-[#0F172B] min-h-screen pt-[150px] relative lg:pt-[300px]">
      <div className="absolute top-0 w-full z-0 opacity-30">
        <Image
          src={CallBotTopBg}
          width={2600}
          height={300}
          alt="gradient shape"
        />
      </div>
      <div className="flex flex-col-reverse gap-8 items-center justify-center relative z-[1] mx-auto pb-10 lg:flex-row">
        <div data-aos="fade-up" className="w-fit overflow-hidden max-w-[500px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/auto-snipe-tutorial.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          data-aos="fade-down"
          className="flex flex-col items-center max-w-full text-center lg:max-w-[30%] lg:items-start lg:text-left"
        >
          <h1 className="font-extrabold text-4xl tracking-[-0.61px] text-[#E2E8F0] mb-[25px] md:text-[64px] md:leading-[72px]">
            Welcome to SolCypher Call Bot
          </h1>
          <p className="text-base tracking-[-0.31px] mb-[55px] md:text-[18px] md:leading-6">
            Add SolCypher Call Bot To Your Telegram Group
          </p>
          <Link
            className="btn text-white bg-[#AD46FF] hover:bg-[#ac46ffb2] w-full transition duration-150 ease-in-out group py-3 px-[15px] border-2 border-[#E9D4FF] modal-btn-shadow max-w-[285px]"
            target="_blank"
            href="https://t.me/solcypher_gem_bot"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-0 opacity-40">
        <Image
          src={CallBotBottomBg}
          width={2615}
          height={400}
          alt="gradient shape"
        />
      </div>
    </section>
  );
}

export default CallBotPage;
