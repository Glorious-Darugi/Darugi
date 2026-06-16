"use client";

import { useEffect, useState } from "react";
import { site, navItems } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (window.innerWidth > 720) setOpen(false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="container site-header__inner">
        <a href="#top" className="brand" aria-label={`${site.name} 홈`}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">{site.name}</span>
        </a>

        <nav
          className={`nav${open ? " is-open" : ""}`}
          id="nav"
          aria-label="주요 메뉴"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--primary btn--sm header-cta"
          href={site.kakaoUrl}
          target="_blank"
          rel="noopener"
        >
          카카오톡 상담
        </a>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
