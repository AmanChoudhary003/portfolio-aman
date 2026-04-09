import Script from "next/script";

export default function CookieBanner() {
  return (
    <>
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/deb1aa3accfc31fa6ecc4696/script.js"
      ></Script>
    </>
  );
}
