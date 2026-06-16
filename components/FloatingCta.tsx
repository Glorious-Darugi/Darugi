import { site } from "@/lib/site";

/** 모바일 하단 고정 카카오톡 상담 버튼 */
export default function FloatingCta() {
  return (
    <a
      className="floating-cta"
      href={site.kakaoUrl}
      target="_blank"
      rel="noopener"
      aria-label="카카오톡 상담"
    >
      💬 카카오톡 상담
    </a>
  );
}
