import Script from "next/script";

export default function Analytics() {
  const gaID = process.env.G_ID;
  if (!gaID) return null;

  return (
    <>
      <Script
        id="google-consent-mode"
        strategy="beforeInteractive"
        data-cookieconsent="ignore"
      >
        {` window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments)
    }
    gtag('consent', 'default', {
        'ad_personalization': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'analytics_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied',
        'security_storage': 'granted',
        'wait_for_update': 500,
    });
    gtag("set", "ads_data_redaction", true);
    gtag("set", "url_passthrough", false) `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
        strategy="afterInteractive"
      ></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; 
        function gtag() {window.dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', '${gaID}', {
        send_page_view:false})`}
      </Script>
    </>
  );
}
