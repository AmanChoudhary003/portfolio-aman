"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DocumentTitle() {
  const docTitle = usePathname();

  let cleanTitle =
    docTitle
      .replace(/^\//, "") // Remove first slash
      .replace(/[-_]/g, " ") // Replace dashes with spaces
      .split("|")
      .pop() || "Aman Choudhary"; // Get the last part of the path or "Home"

  useEffect(() => {
    document.title = `Portfolio | ${cleanTitle.slice(0,1 ).toUpperCase()+ cleanTitle.slice(1)}`;

    return () => {};
  }, [docTitle]);

  return null;
}
