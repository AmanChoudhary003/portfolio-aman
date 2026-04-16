"use client";

import { useState, useEffect } from "react";

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("google-consent");
    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (status: "granted" | "denied") => {
    // 1. Update Google Consent Mode
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
    }

    // 2. Save choice and hide banner
    localStorage.setItem("google-consent", status);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 z-9999 bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 md:max-w-md ml-auto">
      <h3 className="text-lg font-bold text-black mb-2">Cookie Privacy</h3>
      <p className="text-sm text-gray-600 mb-4">
        We use cookies to analyze traffic and improve your experience on our
        site.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => handleConsent("granted")}
          className="bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-800 transition"
        >
          Accept All
        </button>
        <button
          onClick={() => handleConsent("denied")}
          className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
