import { site } from "@/lib/site";

/**
 * 구조화 데이터(JSON-LD).
 * 구글/네이버 + 생성형 AI(GEO·AEO)가 사이트 내용을 이해하고
 * 답변에 인용하기 쉽게 만드는 핵심 요소입니다.
 */
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: `${site.name} — AI 검색 마케팅`,
        description:
          "네이버 블로그 SEO, GEO(생성형 AI 검색 최적화), AEO(답변 엔진 최적화), AI 노출 점수 진단, AI 마케팅 사이트 제작 서비스.",
        url: `${site.url}/`,
        areaServed: "KR",
        knowsAbout: [
          "네이버 SEO",
          "블로그 상위노출",
          "GEO",
          "AEO",
          "생성형 AI 검색 최적화",
          "AI 사이트 제작",
          "자동화 MVP",
        ],
        makesOffer: [
          "네이버 블로그 SEO 상위노출",
          "GEO 생성형 AI 검색 최적화",
          "AEO 답변 엔진 최적화",
          "AI 검색 노출 점수 진단",
          "AI 마케팅 사이트 제작",
          "원하는 자동화 서비스 MVP 제작",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: site.role,
        description:
          "AI로 직접 마케팅 사이트를 만들고, 네이버 SEO와 생성형 AI 검색(GEO·AEO)에 노출시키는 마케터.",
        url: `${site.url}/`,
        knowsAbout: [
          "네이버 블로그 SEO",
          "GEO",
          "AEO",
          "생성형 AI 검색 최적화",
          "AI 사이트 제작",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: `${site.url}/`,
        inLanguage: "ko-KR",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: [
          {
            q: "GEO와 AEO가 정확히 무엇인가요?",
            a: "GEO(Generative Engine Optimization)는 ChatGPT·제미나이 같은 생성형 AI가 답변할 때 우리 브랜드를 추천·인용하게 만드는 최적화이고, AEO(Answer Engine Optimization)는 검색 답변·AI 요약에 우리 정보가 먼저 노출되도록 콘텐츠를 구조화하는 작업입니다.",
          },
          {
            q: "네이버 블로그 상위노출, 정말 되나요?",
            a: "키워드 경쟁도 분석부터 글 구조·체류시간·내부 신호까지 검색 로직에 맞춰 설계합니다. 업종과 키워드에 따라 다르지만, 노출 가능한 키워드를 먼저 진단해 현실적인 목표를 함께 정합니다.",
          },
          {
            q: "우리 업종도 가능한가요?",
            a: "네. 업종 특성과 규제(예: 의료광고)를 먼저 파악한 뒤 맞춤으로 진행합니다. 어떤 분야든 키워드와 검색 흐름부터 진단합니다.",
          },
          {
            q: "AI 검색 노출 점수 진단은 어떻게 받나요?",
            a: "타깃 키워드를 ChatGPT·제미나이 등에서 실제로 검색해 현재 노출 여부와 점수를 측정해 드립니다. 카카오톡으로 무료 상담을 신청하시면 진단 절차를 안내합니다.",
          },
        ].map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
