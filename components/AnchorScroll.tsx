"use client";

import { useEffect } from "react";

/**
 * 헤더/푸터의 #앵커 링크를 눌러도 주소창에 #가 남지 않도록 처리.
 * - 같은 페이지 내 앵커: 기본 동작 막고 부드럽게 스크롤(URL은 그대로)
 * - 다른 페이지에서 넘어와 #가 붙은 경우: 스크롤 후 #를 제거
 */
export default function AnchorScroll() {
  useEffect(() => {
    const cleanUrl = () =>
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );

    // 다른 페이지에서 /#section 으로 넘어온 경우: 스크롤 후 해시 제거
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          cleanUrl();
        });
      } else {
        cleanUrl();
      }
    }

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey)
        return;
      const link = (e.target as HTMLElement | null)?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const id = href.slice(hashIndex + 1);
      if (!id) return;

      // 현재 페이지에 해당 섹션이 있을 때만 가로채기
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      cleanUrl();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
