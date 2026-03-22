"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Navbar() {
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

  if (!time) return <div>Loading...</div>;

  return (
    <div className="p-5 px-10 text-white bg-black flex justify-between items-center">
      <p className="text-(--highlightColor)  text-4xl font-black">AMAN.</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-lime-500/50  flex  justify-center items-center rounded-full transition-tranform animate-heartBeat">
            <div className="w-1 h-1 bg-lime-500 rounded-full"></div>
          </div>
          <p className="font-bold mx-2">{time}</p>
        </div>

        <p className="font-bold mx-2">BASED IN NEW DELHI, INDIA</p>
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
