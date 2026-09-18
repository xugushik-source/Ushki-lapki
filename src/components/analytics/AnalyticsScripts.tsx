"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { analyticsConfig } from "@/config/analytics.config";
import { CONSENT_EVENT, CONSENT_STORAGE_KEY } from "./ConsentBanner";

// Loads GA / GTM / Meta Pixel only once an ID is configured via env AND the
// visitor has actively consented — never before (brief section 56/57).
export function AnalyticsScripts() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    try {
      setConsented(localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted");
    } catch {
      setConsented(false);
    }

    function onChange(e: Event) {
      setConsented((e as CustomEvent<string>).detail === "accepted");
    }
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!consented) return null;

  return (
    <>
      {analyticsConfig.googleAnalyticsId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${analyticsConfig.googleAnalyticsId}');`}
          </Script>
        </>
      ) : null}

      {analyticsConfig.googleTagManagerId ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${analyticsConfig.googleTagManagerId}');`}
        </Script>
      ) : null}

      {analyticsConfig.metaPixelId ? (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${analyticsConfig.metaPixelId}');
            fbq('track', 'PageView');`}
        </Script>
      ) : null}
    </>
  );
}
