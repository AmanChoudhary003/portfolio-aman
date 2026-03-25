"use client";

import Link from "next/link";
import Image from "next/image";
import { workSectionData } from "@/constant/constant";
import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsapConfig";
export default function ProjectSection() {
  const projectRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>("#projectDetails");

      elements.forEach((el) => {
        const text = el.querySelectorAll("p");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });

        tl.from(text, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        });
      });
    },
    { scope: projectRef },
  );

  return (
    <div ref={projectRef} className="grid sm:grid-cols-2">
      {workSectionData.map((work, index) => {
        return (
          <div key={index} className="p-5 col-span-1 ">
            <Link target={work.link ? "_blank" : ""} href={work.link || "/"}>
              <div className="w-full h-70 md:h-100 relative overflow-hidden rounded-2xl">
                <Image
                  src={`/images/jflidhg.jpeg`}
                  fill
                  sizes="30vw"
                  alt="project Img"
                  loading="eager"
                  className=" transition-all duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <div id="projectDetails" className="my-5">
              <div className="flex justify-between items-end">
                <p className="text-white mb-1 font-medium text-2xl mr-1">
                  {`${work.name}`}
                </p>
                <p className="text-white/50">{`${work.date}`}</p>
              </div>

              <p>{work.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
