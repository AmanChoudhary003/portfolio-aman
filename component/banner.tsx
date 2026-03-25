import Image from "next/image";

import { gsap, useGSAP } from "@/lib/gsapConfig";

import isMobile from "@/hook/windowResize";

export default function Banner() {
  const mobile = isMobile();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#banner",
        start: mobile ? "top top" : "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to("#bannerBackgroundImg", {
      scale: 1.5,
      ease: "none",
    });
  });

  return (
    <div
      id="banner"
      className=" w-full h-100 sm:min-h-screen p-5 sm:p-15 relative flex items-center justify-center  rounded-4xl overflow-hidden"
    >
      <Image
        src={`/images/bannerbackground.png`}
        fill
        sizes="100vw"
        className="-z-10"
        id="bannerBackgroundImg"
        alt="bannerBackgroundimg"
        loading="eager"
      />

      <h2 className="highlightFont text-4xl sm:text-6xl md:text-8xl text-center font-bold text-white">
        Let’s Create <br />{" "}
        <span className="ml-30 sm:ml-50">
          Something <br /> Amazing{" "}
          <span className="text-(--highlightColor)">.</span>
        </span>
      </h2>
    </div>
  );
}
