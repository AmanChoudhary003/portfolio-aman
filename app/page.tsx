"use client";

import Image from "next/image";
import LoopingText from "@/component/loopingtext";
import LogoSlider from "../component/logoslider";
import About from "@/component/about";
import Service from "@/component/service";
import Banner from "@/component/banner";
import ProjectSection from "@/component/work";
import ClientReview from "@/component/clientreview";
import Tool from "@/component/tool";
import Link from "next/link";
import { MoveRight } from "lucide-react";

import { gsap, useGSAP, SplitText } from "@/lib/gsapConfig";

export default function Home() {
  useGSAP(() => {
    const headline = SplitText.create(".heroSectionPara", { type: "lines" });
    const name = SplitText.create(".name", { type: "words" });
    gsap.from([headline.lines, name.words], {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.04,
      ease: "power1.inOut",
    });
  });

  return (
    <div>
      <div className="w-full h-screen  p-5 pb-20 sm:p-15  flex flex-wrap items-end relative rounded-4xl">
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
        <h1 className="name highlightFont   text-white text-6xl md:text-8xl font-bold mb-15 ">
          AMAN <br /> CHOUDHARY
          <span className=" text-(--highlightColor)">.</span>
        </h1>
      </div>
      <div className="p-5 sm:p-15 ">
        <p className="text-white/60">Brand That Believe in my work</p>
        <LogoSlider />
      </div>

      <About />
      <Service />
      <div className="p-10">
        <div className="flex justify-between items-end">
          <h2 className="highlightFont text-white text-6xl md:text-9xl font-bold">
            SELECTED <br /> WORKS
            <span className="text-(--highlightColor)">.</span>
          </h2>

          <Link
            href={`/work`}
            className="w-50 h-10 font-medium p-5  text-black bg-white flex items-center  rounded-4xl"
          >
            <div className="flex items-center">
              <p className="mr-1">View all my work</p>
              <MoveRight />
            </div>
          </Link>
        </div>
        <ProjectSection />
      </div>
      <div className="my-5 ">
        <p className="highlightFont text-4xl text-center mb-20">TOOLS I WORK WITH</p>
        <Tool />
      </div>
      <ClientReview />
      <Banner />
    </div>
  );
}
