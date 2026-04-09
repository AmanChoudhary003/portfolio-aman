import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_ID}`}
        strategy="afterInteractive"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {window.dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', ${process.env.G_ID})`}
      </Script>
    </>
  );
}
