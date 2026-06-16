"use client";

import { useEffect } from "react";

/**
 * 스크롤 등장 애니메이션 + 숫자 카운트업 + 점수 게이지.
 * 본문은 서버에서 렌더되고, 이 컴포넌트는 마운트 후 시각 효과만 입힙니다.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* 1) 스크롤 등장 */
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (prefersReduced || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
    }

    /* 2) 카운트업 + 게이지 */
    const animateCount = (
      el: HTMLElement,
      target: number,
      gauge: HTMLElement | null
    ) => {
      if (prefersReduced) {
        el.textContent = String(target);
        if (gauge) gauge.style.setProperty("--val", String(target));
        return;
      }
      const duration = 1200;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        const value = Math.round(target * eased);
        el.textContent = String(value);
        if (gauge) gauge.style.setProperty("--val", String(value));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const watch = (el: HTMLElement, onEnter: () => void) => {
      if (prefersReduced || !("IntersectionObserver" in window)) {
        onEnter();
        return;
      }
      const co = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              onEnter();
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      co.observe(el);
    };

    // 게이지: 0으로 내려두고 보이면 채움
    document.querySelectorAll<HTMLElement>(".gauge").forEach((g) => {
      const num = g.querySelector<HTMLElement>("[data-count]");
      const target = parseInt(num?.getAttribute("data-count") ?? "0", 10);
      g.style.setProperty("--val", "0");
      if (num) watch(g, () => animateCount(num, target, g));
    });

    // 일반 통계 카운터
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((num) => {
      if (num.closest(".gauge")) return;
      const target = parseInt(num.getAttribute("data-count") ?? "0", 10);
      watch(num, () => animateCount(num, target, null));
    });
  }, []);

  return null;
}
