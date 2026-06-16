import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">{site.name}</span>
          <p>{site.tagline}</p>
        </div>
        <nav className="site-footer__nav" aria-label="푸터 메뉴">
          <a href="/#services">서비스</a>
          <a href="/blog">블로그</a>
          <a href="/contact">상담 신청</a>
          <a href={site.kakaoUrl} target="_blank" rel="noopener">
            카카오톡 상담
          </a>
        </nav>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
