import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingCta from "@/components/FloatingCta";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: site.name,
    title: "검색과 AI가 당신을 먼저 찾게 만듭니다 | " + site.name,
    description:
      "네이버 SEO부터 ChatGPT·제미나이 AI 검색 노출(GEO·AEO)까지. 직접 만들고 직접 노출시키는 마케터.",
    url: "/",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "검색과 AI가 당신을 먼저 찾게 만듭니다 | " + site.name,
    description: "네이버 SEO부터 ChatGPT·제미나이 AI 검색 노출(GEO·AEO)까지.",
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#787fff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main">
          본문 바로가기
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingCta />
      </body>
    </html>
  );
}
