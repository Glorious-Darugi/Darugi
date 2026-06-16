import type { ReactNode } from "react";

/** 서비스 카드용 라인 아이콘 (currentColor 사용) */
const PATHS: Record<string, ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3Z" />
      <path d="M18.5 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H8l-4 3.5V5Z" />
      <path d="M8.5 10.5h7M8.5 13h4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <rect x="8" y="12" width="3" height="5" />
      <rect x="14" y="8" width="3" height="9" />
    </>
  ),
  bolt: <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />,
  wrench: (
    <path d="M21 4a5 5 0 0 1-6.5 6.5L6 19l-2-2 8.5-8.5A5 5 0 0 1 19 2l-2.5 2.5 1.5 1.5L21 4Z" />
  ),
};

export default function Icon({ name }: { name: keyof typeof PATHS | string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.search}
    </svg>
  );
}
