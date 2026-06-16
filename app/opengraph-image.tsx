import { ImageResponse } from "next/og";

// 카카오톡·SNS 공유 미리보기용 OG 이미지(PNG 자동 생성).
// 한글 폰트 임베드 이슈를 피하려고 라틴 텍스트로 구성 — 모든 플랫폼에서 안정적으로 렌더됩니다.
export const alt = "Darugi — Search & AI find you first";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
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
          <div style={{ fontSize: 42, fontWeight: 800, color: "#15141c" }}>
            Darugi
          </div>
        </div>

        {/* 메인 카피 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              color: "#15141c",
              lineHeight: 1.08,
              letterSpacing: "-2px",
            }}
          >
            Search &amp; AI
          </div>
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              color: "#5a4ff0",
              lineHeight: 1.08,
              letterSpacing: "-2px",
            }}
          >
            find you first.
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
            {["NAVER SEO", "GEO", "AEO", "AI MVP"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 26,
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
    size
  );
}
