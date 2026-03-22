"use client";

import Image from "next/image";
import LoopingText from "@/component/loopingtext";
import LogoSlider from "../component/logoslider";
import About from "@/component/about";
import Service from "@/component/service";
import Banner from "@/component/banner";
import Work from "@/component/work";
import ClientReview from "@/component/clientreview";

import { gsap, useGSAP, SplitText } from "@/lib/gsapConfig";

export default function Home() {
  useGSAP(() => {
    const headline = SplitText.create(".heroSectionPara", { type: "words" });
    const name = SplitText.create(".name", { type: "words" });
    gsap.from([headline.words, name.words], {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.04,
      ease: "power1.inOut",
    });
  });

  return (
    <div>
      <div className="w-full h-screen  p-5 sm:p-15  flex flex-wrap items-end relative rounded-4xl">
        <Image
          src={`/images/32908346_278261219198.jpg`}
          fill
          sizes="100vw"
          loading="eager"
          alt="heroSection_backgroundimg"
          className="-z-10 rounded-b-4xl"
        />
        <div className="w-full py-5 flex justify-between items-center   flex-wrap  ">
          <div className="sm:w-[45%] h-full">
            <p className=" heroSectionPara text-xl">
              <span className="text-white">
                {" "}
                Turning complex ideas into high-performing <br /> digital
                experiences
              </span>{" "}
              that feel seamless and look exceptional.
            </p>
          </div>
          <LoopingText />
        </div>
        <h1 className="name highlightFont text-white text-6xl md:text-8xl font-bold">
          AMAN <br /> CHOUDHARY
          <span className=" text-(--highlightColor)">.</span>
        </h1>
      </div>
      <div className="p-15">
        <p className="text-white/60">Brand That Believe in my work</p>
        <LogoSlider />
      </div>

      <About />
      <Service />
      {/* <Work /> */}
      <ClientReview />
      <Banner />
    </div>
  );
}
