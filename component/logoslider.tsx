"use client";

import Image from "next/image";
import { companyLogos } from "@/constant/constant";

export default function LogoSlider() {
  return (
    <div className="my-5">
      <div className="marquee flex overflow-hidden">
        <div className=" marqueeScroll  flex justify-around  ">
          {[...companyLogos, ...companyLogos].map((logo, index) => {
            return (
              <div key={index} className="w-20 sm:w-40 h-20 m-1 relative rounded-lg  overflow-hidden" >
                <Image
                  src={`/images/companylogos/${logo}`}
                  sizes="10vw"
                  fill
                  alt="companylogo"
                  className="rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
