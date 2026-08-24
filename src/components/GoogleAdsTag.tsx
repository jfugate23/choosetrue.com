import Script from 'next/script';

export default function GoogleAdsTag() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const callLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL;
  if (!adsId) return null;

  const callTrackingConfig = callLabel
    ? `gtag('config', '${adsId}/${callLabel}', {
          'phone_conversion_number': '(646) 942-9394'
        });`
    : '';

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`} strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${adsId}');
          ${callTrackingConfig}
        `}
      </Script>
    </>
  );
}
