"use client";

import Image from "next/image";
import { companyLogos } from "@/constant/constant";

export default function LogoSlider() {
  return (
    <div className="my-5">
      <div className="marquee   flex overflow-hidden relative">
        <div className=" marqueeScroll  flex justify-around  ">
          {[...companyLogos, ...companyLogos].map((logo, index) => {
            return (
              <div
                key={index}
                className="w-20 sm:w-40 h-20 m-1 relative rounded-lg  overflow-hidden"
              >
                <Image
                  src={`/images/companylogos/${logo}`}
                  sizes="10vw"
                  fill
                  alt="companylogo"
                  className="rounded-lg z-0"
                />
              </div>
            );
          })}
        </div>
        <div className="w-10  sm:w-20 md:w-50 h-full bg-linear-to-r from-black  absolute top-0 left-0 z-10  ">
          {" "}
        </div>
        <div className="w-10  sm:w-20 md:w-50 h-full bg-linear-to-l from-black  absolute top-0 right-0 z-10  ">
          {" "}
        </div>
      </div>
    </div>
  );
}
