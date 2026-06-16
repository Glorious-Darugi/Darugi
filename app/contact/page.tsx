import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "상담 신청 | " + site.name,
  description:
    "네이버 SEO·GEO·AEO·AI 사이트 제작·자동화 MVP 상담 신청. 이름과 연락처만 남기면 빠르게 연락드립니다.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "상담 신청 | " + site.name,
    description: "네이버 SEO부터 AI 검색 노출까지, 편하게 상담 신청하세요.",
    url: "/contact",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="section contact-hero">
        <div className="container container--narrow">
          <p className="eyebrow">CONTACT</p>
          <h1 className="section__title">상담 신청</h1>
          <p className="section__lead">
            카카오톡이 편하면 오른쪽 아래 버튼으로 바로 말 걸어 주세요. 폼이
            편하면 아래에 남겨주시면 됩니다. <b>이름·연락처</b>만 있어도 충분합니다.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
