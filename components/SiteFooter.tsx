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
          <a href="#services">서비스</a>
          <a href="#mvp">자동화 MVP</a>
          <a href="#faq">FAQ</a>
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
