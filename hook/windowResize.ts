"use client";
import { useState, useEffect } from "react";

export default function WindowWidth() {
  const [isMobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkDevice = () => {
      setMobile(window.innerWidth < 768);
    };
    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return isMobile;
}
