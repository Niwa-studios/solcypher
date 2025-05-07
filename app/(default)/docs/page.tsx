import Image from "next/image";
import Link from "next/link";
import React from "react";
import DocsGradient from "@/public/images/docs-gradient.png";
import Logo from "@/components/ui/logo";

function DocsPage() {
  return (
    <section className="bg-[url(/images/docs-bg.svg)] bg-cover bg-center bg-black min-h-screen relative lg:min-h-[120vh]">
      <div data-aos="fade-down" className="flex flex-col gap-8 relative z-[1] max-w-full items-center pt-[200px] px-[4%] lg:px-[129px] lg:items-start lg:max-w-[50%] lg:pt-[282px]">
        <Logo />
        <div className="text-center lg:text-left">
          <h2 className="text-[48px] leading-[67.2px] tracking-[-0.5px] mb-0.5 text-white font-extrabold">
            Documentation
          </h2>
          <p className="text-base tracking-[-0.31px]">
            SolCypher Trading Bot Documentation
          </p>
        </div>
        <Link
          className="flex font-medium text-sm text-white p-[1px] rounded-lg text-center cursor-pointer bg-linear-120 w-full from-[#FFFFFF] to-[#ffffff12] max-w-[275px]"
          target="_blank"
          href="https://docs.solcypher.ai/docs/introduction"
        >
          <div className="py-3 w-full rounded-lg bg-[#AD46FF] duration-100 hover:bg-[#ac46ffb0]">Get Started</div>
        </Link>
      </div>
      <div className="absolute bottom-0 w-full z-0">
        <Image
          src={DocsGradient}
          width={2615}
          height={982}
          alt="gradient shape"
        />
      </div>
    </section>
  );
}

export default DocsPage;
