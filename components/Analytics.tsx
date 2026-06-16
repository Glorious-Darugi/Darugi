import Script from "next/script";
import { site } from "@/lib/site";

/**
 * 방문자 분석. lib/site.ts 에 ID를 넣으면 자동으로 켜지고,
 * 비어 있으면 아무것도 렌더하지 않습니다(개발 중 깔끔).
 */
export default function Analytics() {
  const { ga4, naver } = site.analytics;

  return (
    <>
      {ga4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4}');
            `}
          </Script>
        </>
      )}

      {naver && (
        <>
          <Script
            src="//wcs.naver.net/wcslog.js"
            strategy="afterInteractive"
          />
          <Script id="naver-analytics" strategy="afterInteractive">
            {`
              if(!window.wcs_add) window.wcs_add = {};
              window.wcs_add["wa"] = "${naver}";
              if(window.wcs){ wcs_do(); }
            `}
          </Script>
        </>
      )}
    </>
  );
}
