"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsapConfig";
export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const paras = gsap.utils.toArray<HTMLElement>(".aboutText");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#aboutText",
          start: "top 50%",
          end: "+=200",
          scrub: true,
        },
      });

      paras.forEach((el) => {
        const split = SplitText.create(el, { type: "chars" });
        tl.to(split.chars, {
          color: "#ffffff",
          stagger: 0.05,
        });
      });
    },
    { scope: aboutRef },
  );

  return (
    <div ref={aboutRef} className="h-190 sm:h-170 md:h-150 lg:h-170 p-5 sm:p-15 ">
      <h2 className="highlightFont text-white text-6xl md:text-8xl font-bold my-2">
        ABOUT
        <span className="  text-(--highlightColor)">.</span>
      </h2>
      <div className="h-100 md:flex  justify-between my-5">
        <div className="w-full md:w-[45%] h-50 sm:h-70 md:h-full mb-10  relative ">
          <Image
            src={`/images/jflidhg.jpeg`}
            alt="aboutImage"
            fill
            sizes="50vw"
            className="rounded-2xl"
          />
        </div>
        <div id="aboutText" className="w-full md:w-[50%]">
          <p className="aboutText lg:text-xl mb-4">
            <span className="text-white ">
              {" "}
              I believe great websites are not just designed, they are
              engineered to perform.
            </span>{" "}
            <span>
              {" "}
              Every interaction, every animation, every system should feel
              smooth, fast, and purposeful. I work at the intersection of design
              and development, building scalable, high-performance digital
              products with clean code and attention to detail. Constantly
              exploring new technologies.
            </span>
          </p>
          <p className="aboutText lg:text-xl text-white/50">
            I focus on pushing boundaries with modern tools, animations, and
            immersive web experiences. I’m constantly learning, refining, and
            pushing my creative boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}
