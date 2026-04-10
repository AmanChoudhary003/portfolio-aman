import Script from "next/script";

export default function Analytics() {
  const gaID = process.env.G_ID;
  if (!gaID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; 
        function gtag() {window.dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', '${gaID}')`}
      </Script>
    </>
  );
}
