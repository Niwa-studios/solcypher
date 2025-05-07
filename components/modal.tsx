import Image from "next/image";
import React from "react";
import Illustration from "@/public/images/feature-container-gradient.png";
import Logo from "./ui/logo";

interface ModalProps{
  close: ()=>void
}

function Modal({ close }: ModalProps) {
  
  const closeModal=()=>close()

  return (
    <div className="fixed top-0 right-0 left-0 z-20">
      <div className="flex fixed justify-center items-center w-full h-full z-30">
        <div className="relative bg-[#0F172B] w-[90%] max-w-[627px] rounded-[30px] pt-[70px] pb-[50px] px-9 md:w-full">
          <div className="absolute top-0 right-0 w-full">
            <Image
              src={Illustration}
              className="w-full"
              width={1320}
              height={453}
              alt="Features Illustration"
            />
          </div>
          <button onClick={closeModal} className="absolute top-5 right-8 cursor-pointer">
            Close
          </button>
          <div className="flex flex-col items-center gap-12">
            <div className="mx-auto text-center">
              <Logo />
              <div>
                <h3 className="text-2xl font-extrabold">
                  Welcome to SolCypher
                </h3>
                <p className="text-base">
                  Connect with Telegram to access your dashboard
                </p>
              </div>
            </div>
            <div className="mx-auto text-center">
              <a
                className="btn text-white bg-[#AD46FF] hover:bg-[#ac46ffb2] w-full transition duration-150 ease-in-out group py-3 px-[15px] border-2 border-[#E9D4FF] modal-btn-shadow"
                target="_blank"
                href="https://t.me/solcypher_bot"
              >
                Get Started
              </a>
              <p className="mt-3.5 text-sm">
                Connect with Telegram to access your dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-full h-full bg-[#13172e73]"></div>
    </div>
  );
}

export default Modal;
