"use client";

import { Cookie } from "lucide-react";
import { useState, useEffect } from "react";
import { SaveConsent } from "@/app/actions/consent";

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const hasConsented = document.cookie.includes("portfolio_consent=");
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = async (status: "granted" | "denied") => {
    const randId = crypto.randomUUID();

    const consentData = {
      consentId: randId,
      status: status,
      userAgent: navigator.userAgent,
    };

    const result = await SaveConsent({ consent: consentData });

    if (result.success) {
      document.cookie = `portfolio_consent=${status};max-age=${60 * 60 * 24 * 365};path=/;Secure`;
      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: status,
          ad_storage: status,
        });
      }
      setShowBanner(false);
    } else {
      console.error("failed to save audit log");
    }
  };

  if (!showBanner) return null;
  return (
    <div className="w-90 sm:w-100 h-fit p-5 bg-black/70 backdrop-blur-2xl fixed  left-[50%] -translate-x-[50%] sm:translate-x-0 sm:left-6 bottom-6 rounded-xl  z-9999 ">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white flex">
            Privacy Preference <Cookie className="ml-2" />
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            I use cookies to understand how you interact with my portfolio. This
            helps me improve my work. Choice is yours!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => handleConsent("granted")}
            className="flex-1 px-4 py-2.5 bg-(--highlightColor) text-white text-sm font-medium rounded-lg  transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent("denied")}
            className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Decline
          </button>
        </div>
        <p className="text-[10px] text-gray-400 text-center">
          By clicking Accept, a unique anonymous ID will be stored for audit
          purposes.
        </p>
      </div>
    </div>
  );
}
