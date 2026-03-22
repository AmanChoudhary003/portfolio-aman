"use client";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsapConfig";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);

  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // for rendering clock on top of navbar

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  useGSAP(() => {
    let nav = navRef.current;
    if (!nav) return;

    let windowScroll = window.scrollY;

    const navScroll = () => {
      let currentScroll = window.scrollY;

      if (currentScroll == 0) {
        gsap.to(nav, {
          y: 0,
          backgroundColor: "transparent",
          backdropFilter: "none",
          duration: 0.3,
          overwrite: true,
        });
      } else {
        if (currentScroll > windowScroll) {
          gsap.to(nav, {
            y: -100,
            backgroundColor: "#000",
            backdropFilter: "blur(20px)",
            duration: 0.3,
            overwrite: true,
            ease: "power1.inOut",
          });
        } else {
          gsap.to(nav, {
            y: 0,
            backdropFilter: "blur(20px)",
            duration: 0.3,
            overwrite: true,
            ease: "power1.inOut",
          });
        }
      }
      windowScroll = currentScroll;
    };
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  });

  return (
    <div
      ref={navRef}
      id="nav"
      className="w-full p-5 sm:p-10 sm:py-7 text-white flex justify-between items-center fixed z-100"
    >
      <Link href={`/`}>
        {" "}
        <p className="highlightFont text-(--highlightColor) text-5xl font-black">
          AMAN.
        </p>
      </Link>
      <div className="flex justify-between items-center">
        <div className="hidden sm:flex  items-center">
          <div className="w-2 h-2 bg-lime-500/50  flex  justify-center items-center rounded-full transition-tranform animate-heartBeat">
            <div className=" w-1 h-1 bg-lime-500 rounded-full"></div>
          </div>
          <p className="  font-bold mx-2">{time || "--:--"}</p>
        </div>

        <p className="hidden md:block  font-bold mx-2">
          BASED IN NEW DELHI, INDIA
        </p>
        <Link href={`/contact`} className=" p-2 px-4 mx-2 border rounded-4xl">
          <p>LET'S TALK</p>
        </Link>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`w-10 h-10 hamburger bg-white rounded-full relative
       flex justify-center items-center
            `}
        >
          <div
            className={`w-[75%] h-1 bg-black rounded-full  absolute 
            ${isOpen ? " rotate-40" : "rotate-0 -translate-y-1"}
            `}
          ></div>
          <div
            className={`w-[75%] h-1 bg-black rounded-full  absolute 
                  ${isOpen ? "-rotate-40" : "rotate-0  translate-y-1"} `}
          ></div>
          <div className="w-1 h-1  bg-white rounded-full absolute"></div>
        </div>
      </div>
    </div>
  );
}
