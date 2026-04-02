import { pageLink, socials } from "@/constant/constant";
import Link from "next/link";
import LoopingText from "./loopingtext";

export default function Footer() {
  return (
    <div className=" p-5 pt-10 sm:p-15 sm:pt-32  rounded-t-4xl  ">
      <div>
        <p className="text-sm md:text-xl mb-2 ">REACH OUT ANYTIME</p>
        <a href="mailto:codeac200@gmail.com?subject=Hello&body=I%20want%20to%20connect">
          <div className="flex items-center buttonHover">
            <h2 className=" text-2xl md:text-5xl text-white font-bold">
              codeac200@gmail.com
            </h2>
          </div>
        </a>
      </div>

      <div className="w-80  my-10 flex justify-between ">
        <div className="mr-10">
          <ul>
            {pageLink.map((link, index) => {
              return (
                <li key={index} className="my-2 buttonHover">
                  <Link
                    href={link.href}
                    className=" text-xl font-medium text-white "
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            {socials.map((link, index) => {
              return (
                <li key={index} className="buttonHover my-2">
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium text-white "
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <h1 className="highlightFont text-white text-6xl md:text-8xl font-bold">
          AMAN <br /> CHOUDHARY
          <span className=" text-(--highlightColor)">.</span>
        </h1>
        <div>
          <LoopingText />
        </div>
      </div>
    </div>
  );
}
