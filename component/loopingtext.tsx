"use client";
import { useEffect, useState, useRef } from "react";
import { homeBannerLines } from "@/constant/constant";

export default function LoopingText() {
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
    <div className="hidden sm:block">
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
  );
}
