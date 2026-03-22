"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import LogoSlider from "../component/logoslider";
import { homeBannerLines } from "@/constant/constant";
import About from "@/component/about";
import Service from "@/component/service";

export default function Home() {
  const [textStyle, setTextStyle] = useState<number>(0);

  //for looping of text in hero section

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startLoop();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startLoop = () => {
    intervalRef.current = setInterval(() => {
      setTextStyle((prev) => (prev + 1) % homeBannerLines.length);
    }, 2000);
  };

  const stopLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div>
      <div className="w-full h-screen p-10 flex flex-wrap items-end relative rounded-4xl">
        <Image
          src={`/images/32908346_278261219198.jpg`}
          fill
          sizes="100vw"
          loading="eager"
          alt="heroSection_backgroundimg"
          className="-z-10 rounded-b-4xl"
        />
        <div className="w-full py-5 flex justify-between items-center   flex-wrap  ">
          <div className="h-full">
            <p className="text-xl">
              <span className="text-white">Turning ideas into </span>{" "}
              experiences that
              <br /> leave a lasting impression.
            </p>
          </div>
          <div className="hidden md:block">
            <ul>
              {homeBannerLines.map((line, index) => {
                return (
                  <li
                    onMouseEnter={() => {
                      setTextStyle(index);
                      stopLoop();
                    }}
                    onMouseLeave={() => {
                      startLoop();
                    }}
                    key={index}
                    className={`h-8  md:h-13 text-3xl  md:text-5xl  m-2  group overflow-hidden transition-tranform
                  ${textStyle == index ? "text-white" : ""}
                  `}
                  >
                    <p className=" transition-all duration-300 group-hover:-translate-y-13">
                      {line}
                    </p>
                    <p className="transition-all  duration-300 group-hover:-translate-y-13">
                      {line}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <h1 className="highlightFont text-white text-6xl md:text-8xl font-bold">
          AMAN <br /> CHOUDHARY{" "}
          <span className="-ml-4  text-(--highlightColor)">.</span>
        </h1>
      </div>
      <div className="p-10">
        <p className="text-white/60">Brand That Believe in my work</p>
        <LogoSlider />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Service />
      </div>
    </div>
  );
}
