import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// 카카오톡·SNS 공유 미리보기용 OG 이미지(PNG 자동 생성).
// 한글이 깨지지 않도록 Pretendard(서브셋) 폰트를 임베드합니다.
export const alt = "다루기 — 검색과 AI가 당신을 먼저 찾게 만듭니다";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pretendard = readFileSync(
  join(process.cwd(), "app/_fonts/pretendard-kr.otf")
);

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "76px",
          position: "relative",
          fontFamily: "Pretendard",
        }}
      >
        {/* 배경 장식 */}
        <div
          style={{
            position: "absolute",
            top: -130,
            right: -90,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "#787fff",
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -70,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "#fff787",
            opacity: 0.6,
          }}
        />

        {/* 브랜드 */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg,#787fff,#5a4ff0)",
              display: "flex",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 13,
                right: 13,
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#fff787",
              }}
            />
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, color: "#15141c" }}>
            다루기
          </div>
        </div>

        {/* 메인 카피 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#15141c",
              lineHeight: 1.12,
              letterSpacing: "-2px",
            }}
          >
            검색과 AI가 당신을
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#5a4ff0",
              lineHeight: 1.12,
              letterSpacing: "-2px",
            }}
          >
            먼저 찾게 만듭니다
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
            {["네이버 SEO", "GEO", "AEO", "자동화 MVP"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 27,
                  fontWeight: 700,
                  color: "#5a4ff0",
                  background: "#eef0ff",
                  borderRadius: 999,
                  padding: "10px 22px",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pretendard",
          data: pretendard,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
