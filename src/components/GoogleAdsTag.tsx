import Script from 'next/script';

export default function GoogleAdsTag() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const callLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL;
  const loaderId = analyticsId || adsId;
  if (!loaderId) return null;

  const callTrackingConfig = adsId && callLabel
    ? `gtag('config', '${adsId}/${callLabel}', {
          'phone_conversion_number': '(646) 942-9394'
        });`
    : '';

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`} strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          ${analyticsId ? `gtag('config', '${analyticsId}');` : ''}
          ${adsId ? `gtag('config', '${adsId}');` : ''}
          ${callTrackingConfig}
        `}
      </Script>
    </>
  );
}
