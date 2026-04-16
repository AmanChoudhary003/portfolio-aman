"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { format } from "path";

export default function DocumentTitle() {
  const docTitle = usePathname();

  let cleanTitle =
    docTitle
      .replace(/^\//, "") // Remove first slash
      .replace(/[-_]/g, " ") // Replace dashes with spaces
      .split("|")
      .pop() || "Aman Choudhary"; // Get the last part of the path or "Home"

  const formattedData = `Portfolio | ${cleanTitle.slice(0, 1).toUpperCase() + cleanTitle.slice(1)}`;
  useEffect(() => {
    document.title = formattedData;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_title: formattedData,
        page_location: window.location.href,
        page_path: docTitle,
      });
    }

    return () => {};
  }, [docTitle, formattedData]);

  return null;
}
