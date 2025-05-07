import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { useState } from "react";
import Modal from "../modal";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <header className="fixed top-0 w-full z-10 lg:top-12">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-4 bg-[#141c3073] backdrop-blur-md sm:px-6 lg:bg-transparent lg:backdrop-blur-none">
          <div className="block lg:hidden ">
            <Logo />
          </div>

          <div className="hidden gap-3.5 justify-around items-center border border-[#ffffff1b]  rounded-[100px] w-full max-w-[70%] mx-auto py-1 pl-[15px] pr-3 bg-[#141c3073] backdrop-blur-md lg:flex">
            {/* Site branding */}
            <div>
              <Logo />
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop menu links */}
              <ul className="flex grow justify-center gap-4 lg:gap-5 items-center">
                <li>
                  <Link
                    className="font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out p-2"
                    href="/leaderboard"
                  >
                    Leaderboards
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out p-2"
                    href="/call-bot"
                  >
                    Call Bot
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out p-2"
                    target="_blank"
                    href="https://dapp.solcypher.ai"
                  >
                    dApp
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out p-2"
                    href="/docs"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out p-2"
                    target="_blank"
                    href="https://t.me/solcypher_portal"
                  >
                    Support
                  </Link>
                </li>
                {/* <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/customers">Customers</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/changelog">Changelog</Link>
              </li> */}
              </ul>
            </nav>

            <button
              onClick={() => setShowModal(true)}
              className="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group h-fit w-fit py-3 px-[15px] cursor-pointer"
            >
              Launch Telegram Bot{" "}
              <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </button>
          </div>

          <MobileMenu />
        </div>
      </header>
      {
        showModal ? <Modal close={closeModal} /> : null
      }
      
    </>
  );
}
