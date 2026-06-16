/**
 * ✏️ 사이트 핵심 설정 — 여기 값만 바꾸면 전체에 반영됩니다.
 * (브랜드명, 카카오톡 주소, 도메인, 소개 문구)
 */
export const site = {
  /** 브랜드/이름 */
  name: "다루기",
  /** 직함 */
  role: "AI 마케터 / 바이브코더",
  /** 한 줄 소개 */
  tagline: "검색과 AI가 먼저 찾는 마케팅",
  /** 브라우저 탭 제목 */
  title: "다루기 | 검색과 AI가 먼저 찾는 마케팅 — 네이버 SEO·GEO·AEO 전문",
  /** 메타 설명(검색 결과 요약 문구) */
  description:
    "네이버 블로그 상위노출부터 ChatGPT·제미나이 같은 AI 검색 노출(GEO·AEO)까지. 마케팅을 직접 만드는 바이브코더 마케터가 당신의 비즈니스를 검색 결과 맨 앞에 세웁니다. 원하는 자동화는 MVP로 제작.",
  /** ✏️ 배포 도메인 (대표 주소) */
  url: "https://www.darugi.com",
  /** ✏️ 카카오톡 채널/오픈채팅 링크 */
  kakaoUrl: "http://pf.kakao.com/_YeuxbX",
  /** 검색 키워드 */
  keywords: [
    "네이버 블로그 SEO",
    "상위노출",
    "GEO",
    "AEO",
    "생성형 AI 검색 최적화",
    "ChatGPT 마케팅",
    "제미나이 노출",
    "AI 마케팅 사이트 제작",
    "자동화 MVP 제작",
  ],

  /**
   * ✏️ 상담 신청 폼 설정
   * - formEndpoint: Formspree 등 폼 전송 주소(https://formspree.io/f/xxxx).
   *   비워두면 폼이 자동으로 "메일 보내기(mailto)" 방식으로 동작합니다.
   * - email: mailto 폴백에 쓰일 수신 이메일 (공개되니 주의)
   */
  formEndpoint: "",
  email: "",

  /**
   * ✏️ 방문자 분석 (값을 넣으면 자동 활성화, 비우면 꺼짐)
   * - ga4: Google Analytics 4 측정 ID (예: "G-XXXXXXXXXX")
   * - naver: 네이버 애널리틱스 ID
   */
  analytics: {
    ga4: "",
    naver: "",
  },

  /**
   * ✏️ 검색엔진 사이트 인증 코드 (등록 시 받는 코드)
   * - google: 구글 서치콘솔
   * - naver: 네이버 서치어드바이저
   */
  verification: {
    google: "",
    naver: "",
  },
} as const;

/** 내비게이션 메뉴 (다른 페이지에서도 동작하도록 / 로 시작) */
export const navItems = [
  { href: "/#services", label: "서비스" },
  { href: "/#why", label: "차별점" },
  { href: "/#mvp", label: "자동화 MVP" },
  { href: "/blog", label: "블로그" },
  { href: "/#faq", label: "FAQ" },
] as const;
