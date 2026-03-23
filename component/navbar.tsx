"use client";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapConfig";
import { pageLink } from "@/constant/constant";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(isOpen);

  // for rendering clock on top of navbar and setting useRef for hamburgerOpen

  useEffect(() => {
    isOpenRef.current = isOpen;

    //for stopping scroll when hamburger menu is clicked
    // document.body.style.overflow = isOpen ? "hidden" : "auto";

    //clock timeinterval
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
  }, [isOpen]);

  useGSAP(() => {
    let nav = navRef.current;
    if (!nav) return;

    let windowScroll = window.scrollY;

    //navbar scroll animation
    gsap.set(nav, {
      y: windowScroll === 0 ? 0 : -100,
    });

    const navScroll = () => {
      if (isOpenRef.current) return;
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
  useGSAP(() => {
    if (!menuRef.current || !isOpen) return;

    const list = menuRef.current.querySelectorAll("p");

    gsap.from(list, {
      opacity: 0,
      y:200,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, [isOpen]);

  // Closing nav menu
  const closeNavMenu = () => {
    setIsOpen(false);
  };

  return (
    <div ref={navRef} id="nav" className="w-full  -translate-y-20 fixed z-100">
      <div className="p-5 sm:p-10 sm:py-7  text-white flex justify-between items-center relative z-100">
        <Link href={`/`} onClick={() => closeNavMenu()}>
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
          <Link
            href={`/contact`}
            onClick={() => closeNavMenu()}
            className=" p-2 px-4 mx-2 border rounded-4xl"
          >
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

      <div
        className={`w-full h-screen  bg-black  flex items-center justify-center absolute top-0 left-0 z-90 transition-all duration-500
        ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
        `}
      >
        <div>
          <ul id="navMenu" ref={menuRef}>
            {pageLink.map((link, index) => {
              return (
                <li key={index} className="py-2 overflow-hidden">
                  <Link onClick={() => closeNavMenu()} href={`${link.href}`}>
                    <p className="highlightFont tracking-wide text-4xl sm:text-6xl lg:text-8xl text-center  text-white font-black ">
                      {link.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
