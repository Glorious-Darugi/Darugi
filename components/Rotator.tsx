"use client";

import { useEffect, useState } from "react";

const WORDS = ["네이버", "ChatGPT", "Gemini", "구글 AI"];

/** 히어로 헤드라인에서 채널명을 순환시키는 동적 텍스트 */
export default function Rotator() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="rotator" aria-live="polite">
      <span key={i} className="rotator__word">
        {WORDS[i]}
      </span>
    </span>
  );
}
