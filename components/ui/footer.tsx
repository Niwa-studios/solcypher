import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
            <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="mb-4">
                  <Logo />
                </div>
                <div className="text-sm text-slate-300">
                  © SolCypher.AI <span className="text-slate-500">-</span> All
                  rights reserved.
                </div>
              </div>
              {/* Social links */}
              <ul className="flex">
                <li>
                  <a
                    className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                    target="_blank"
                    href="https://x.com/solcypherbot"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                {/* <li className="ml-2">
                  <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" href="#0" aria-label="Dev.to">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                      <path className="w-8 h-8 fill-current" d="M12.29 14.3a.69.69 0 0 0-.416-.155h-.623v3.727h.623a.689.689 0 0 0 .416-.156.543.543 0 0 0 .21-.466v-2.488a.547.547 0 0 0-.21-.462ZM22.432 8H9.568C8.704 8 8.002 8.7 8 9.564v12.872A1.568 1.568 0 0 0 9.568 24h12.864c.864 0 1.566-.7 1.568-1.564V9.564A1.568 1.568 0 0 0 22.432 8Zm-8.925 9.257a1.631 1.631 0 0 1-1.727 1.687h-1.657v-5.909h1.692a1.631 1.631 0 0 1 1.692 1.689v2.533ZM17.1 14.09h-1.9v1.372h1.163v1.057H15.2v1.371h1.9v1.056h-2.217a.72.72 0 0 1-.74-.7v-4.471a.721.721 0 0 1 .7-.739H17.1v1.054Zm3.7 4.118c-.471 1.1-1.316.88-1.694 0l-1.372-5.172H18.9l1.058 4.064 1.056-4.062h1.164l-1.378 5.17Z" />
                    </svg>
                  </a>
                </li>
                <li className="ml-2">
                  <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" href="#0" aria-label="Github">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* 2nd block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Products</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Features</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Integrations</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Pricing & Plans</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Changelog</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Our method</a>
              </li>
            </ul>
          </div> */}

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">
              Resources
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://t.me/solcypher_portal"
                  target="_blank"
                >
                  Community Chat
                </a>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="/docs"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="/tokenomics"
                >
                  Tokenomics
                </Link>
              </li>
              
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Telegram</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://t.me/solcypher"
                  target="_blank"
                >
                  AI Gem Scanner Channel
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://t.me/solcypher_bot"
                  target="_blank"
                >
                  SolCypher Telegram Trade Bot
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">
              Social Links
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://linktr.ee/SolCypherBot"
                  target="_blank"
                >
                  Linktree
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://x.com/solcypherbot"
                  target="_blank"
                >
                  SolCypher Trade Bot X
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://x.com/solcypher_agent"
                  target="_blank"
                >
                  SolCypher AI Agent X
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://medium.com/@solcypher"
                  target="_blank"
                >
                  SolCypher Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
