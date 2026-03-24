"use client";

import Link from "next/link";
import { gsap, useGSAP, SplitText } from "@/lib/gsapConfig";

export default function NotFound() {
  useGSAP(() => {
    gsap.to("#text404 span", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power1.inOut",
    });
  });
  useGSAP(() => {
    gsap.to("#homepageReturn", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h2
          id="text404"
          className=" highlightFont text-[15rem] md:text-[30vw] -ml-10 md:-ml-15 text-white -tracking-[1.5rem] md:-tracking-[3rem] font-bold leading-none"
        >
          <span>4</span>
          <span className="text-(--highlightColor)">0</span>
          <span>4</span>
        </h2>

        <Link
          href="/"
          className="highlightFont text-(--highlightColor) text-3xl font-black border mt-6 px-4 py-2 overflow-hidden"
        >
          <p id="homepageReturn"> RETURN TO HOMEPAGE</p>
        </Link>
      </div>
    </div>
  );
}
