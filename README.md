# 다루기 — 마케터 홍보 사이트 (Next.js 16)

검색(네이버)과 생성형 AI(ChatGPT·제미나이)에서 "먼저 보이게" 만드는 마케터를 홍보하고,
방문자를 **카카오톡 상담**으로 연결하는 1페이지 사이트입니다.
사이트 자체가 SEO/GEO/AEO 최적화 데모 역할을 합니다.

- **프레임워크:** Next.js 16 (App Router) · React 19 · TypeScript
- **배포:** Vercel 권장 (정적 사전 렌더)

---

## 1. 실행 방법 (로컬)

```bash
npm install      # 처음 한 번 (의존성 설치)
npm run dev      # 개발 서버 → http://localhost:3000
```

빌드/미리보기:

```bash
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
```

> Node 20.9 이상 필요 (권장 22.x).

---

## 2. ✏️ 내가 바꾸는 곳 — `lib/site.ts` 한 파일

브랜드명·카카오톡 주소·도메인·소개 문구를 **이 파일 하나에서** 관리합니다.
여기만 고치면 헤더·푸터·CTA·메타태그·구조화 데이터에 전부 반영됩니다.

```ts
export const site = {
  name: "다루기",
  url: "https://REPLACE-WITH-YOUR-DOMAIN.com", // 배포 후 실제 도메인으로
  kakaoUrl: "http://pf.kakao.com/_YeuxbX",      // 카카오톡 채널 링크
  // ...title, description, keywords
};
```

내비게이션 메뉴도 같은 파일의 `navItems`에서 추가/삭제할 수 있습니다.

---

## 3. 파일 구조

```
app/
  layout.tsx        # 공통 틀 + SEO 메타데이터(제목·OG·트위터)
  page.tsx          # 페이지 본문(모든 섹션) ← 문구 수정은 주로 여기
  globals.css       # 디자인(색·레이아웃·반응형·애니메이션)
  robots.ts         # 검색·AI 크롤러 허용 (자동으로 /robots.txt 생성)
  sitemap.ts        # 사이트맵 (자동으로 /sitemap.xml 생성)
  icon.svg          # 파비콘
components/
  SiteHeader.tsx    # 상단 바 (모바일 메뉴·스크롤 효과) [클라이언트]
  SiteFooter.tsx    # 하단
  FloatingCta.tsx   # 모바일 하단 고정 카톡 버튼
  JsonLd.tsx        # 구조화 데이터(Person·Service·FAQ) — GEO/AEO 핵심
  ScrollEffects.tsx # 스크롤 등장·숫자 카운트·점수 게이지 [클라이언트]
lib/
  site.ts           # ⭐ 핵심 설정 (브랜드·카톡·도메인)
public/
  og-image.svg      # 카톡/SNS 공유 미리보기 이미지
```

**자주 만지는 파일:** 문구는 `app/page.tsx`, 설정은 `lib/site.ts`, 색은 `app/globals.css`(맨 위 `:root` 변수).

---

## 4. 배포 방법 (무료)

### Vercel (권장 · 가장 쉬움)
1. [vercel.com](https://vercel.com)에 GitHub로 로그인 → 이 저장소 **Import**
2. 프레임워크가 Next.js로 자동 인식됨 → 그대로 **Deploy**
3. 배포 후 받은 주소를 `lib/site.ts`의 `url`에 넣고 다시 커밋
4. (선택) Settings → Domains에서 내 도메인 연결

배포 후 **구글 서치콘솔**·**네이버 서치어드바이저**에 사이트를 등록하고
`/sitemap.xml`을 제출하면 검색 노출이 빨라집니다.

---

## 5. 왜 이렇게 만들었나 (SEO/GEO/AEO 포인트)

- **서버 렌더링 + 메타데이터 API**: 검색엔진이 본문·제목을 정확히 읽음
- **JSON-LD 구조화 데이터**(Person·ProfessionalService·FAQPage): 생성형 AI가 답변에 인용하기 좋게
- **FAQ 섹션**: 질문–답변 구조로 AEO(답변 엔진)에 유리
- **robots.ts에서 AI 크롤러 명시 허용**: GPTBot·PerplexityBot·네이버 Yeti 등
- **정적 사전 렌더**: 빠른 로딩 → 검색 순위에 유리

---

## 6. 버전 2 확장 아이디어

- 블로그/사례 글 (`app/blog/` 라우트 추가 — Next.js라 페이지 확장이 쉬움)
- "AI 노출 점수 진단" 신청 폼 → API Route(`app/api/`)로 카톡/메일 전달
- 후기·신뢰 로고 영역
- 한국어 + 영어 다국어
- 자동화 MVP 데모 페이지 연결

---

## 7. 추가 기능 설정 (분석 · 상담폼 · 블로그)

모두 `lib/site.ts` 한 파일에서 켜고 끕니다. 비워두면 자동으로 비활성화됩니다.

### 방문자 분석
```ts
analytics: {
  ga4: "G-XXXXXXXXXX",   // Google Analytics 4 측정 ID
  naver: "",              // 네이버 애널리틱스 ID
}
```
- 값을 넣으면 자동 로드됩니다.
- 카카오톡 버튼 클릭은 GA4에 `kakao_click` 이벤트로 기록됩니다.

### 검색엔진 사이트 인증
```ts
verification: {
  google: "구글-서치콘솔-코드",
  naver: "네이버-서치어드바이저-코드",
}
```

### 상담 신청 폼 (`/contact`)
두 가지 방법 중 하나만 설정하면 폼이 동작합니다.
```ts
formEndpoint: "https://formspree.io/f/xxxxxxx",  // (권장) Formspree 등
email: "받을이메일@example.com",                  // 또는 메일앱으로 전송(mailto)
```
- 둘 다 비우면, 폼 제출 시 "카카오톡으로 문의" 안내가 뜹니다.
- ⚠️ `email`은 공개되니 스팸이 걱정되면 Formspree 사용을 권장합니다.

### 블로그 글 추가 (`/blog`)
`lib/posts.ts`의 `posts` 배열에 객체를 하나 추가하면 글이 생깁니다.
```ts
{
  slug: "url-주소",        // /blog/url-주소
  title: "제목",
  description: "검색 요약문",
  date: "2026-06-20",
  readingMin: 5,
  tags: ["네이버 SEO"],
  blocks: [
    { type: "h2", text: "소제목" },
    { type: "p", text: "문단 내용" },
    { type: "ul", items: ["항목1", "항목2"] },
  ],
}
```
- 글마다 Article 구조화 데이터·메타태그·사이트맵이 자동 생성됩니다.

## 📄 추가된 페이지
- `/` 홈 · `/contact` 상담 신청 · `/blog` 블로그 목록 · `/blog/[slug]` 글
