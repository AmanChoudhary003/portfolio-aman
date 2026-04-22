"use client";
import { useRef, useEffect } from "react";

import { homeServiceSection } from "@/constant/constant";
import { gsap, useGSAP, SplitText } from "@/gsapConfig";
export default function Service() {
  const serviceRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".serviceTab").forEach((el) => {
        const heading = el.querySelector(".headingDiv");
        const para = el.querySelector(".paraDiv");
        if (!para) return;
        const split = SplitText.create(para, { type: "lines" });
        // ✅ initial states
        gsap.set(split.lines, {
          y: 50,
          opacity: 0,
        });
        // ✅ timeline (clean + synced)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
        if (heading) {
          tl.to(heading, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        }
        tl.to(
          split.lines,
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3", // overlap with heading
        );
      });
    },
    { scope: serviceRef },
  );

  return (
    <div className=" p-5 sm:p-15 ">
      <p className="highlightFont text-white text-6xl md:text-9xl font-bold my-2">
        SERVICES
        <span className="  text-(--highlightColor)">.</span>
      </p>
      <div id="serviceTab" className="mt-10" ref={serviceRef}>
        {homeServiceSection.map((service, index) => {
          return (
            <div
              key={index}
              className="serviceTab  py-10  flex justify-between items-center flex-wrap  border-b relative group"
            >
              <div className="headingDiv flex items-center mb-5 lg:mb-0">
                <p className="w-10 text-3xl text-(--highlightColor) mr-2 sm:mr-10 font-medium">{`0${index + 1}`}</p>
                <h2 className="w-full sm:w-60  lg:w-100  sm:text-3xl text-white font-medium">
                  {service.title}
                </h2>
              </div>
              <p className="paraDiv w-full sm:w-60  lg:w-100">
                {service.paragraph}
              </p>
              <div className="w-0 h-0.5 absolute -bottom-0.5 left-0  bg-(--highlightColor) transition-all duration-500 group-hover:w-full z-10"></div>
              <div className="rotate-180 w-0 h-0.5 absolute -bottom-0.5 right-0 bg-(--highlightColor) transition-all  duration-500 group-hover:w-full z-10"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
