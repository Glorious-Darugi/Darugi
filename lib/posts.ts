/**
 * ✏️ 블로그 글 데이터.
 * 새 글을 추가하려면 posts 배열에 객체 하나를 더하면 됩니다.
 * 본문은 blocks 배열로 작성합니다(p: 문단, h2: 소제목, ul: 목록).
 */
export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readingMin: number;
  tags: string[];
  blocks: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "what-is-geo-aeo",
    title: "GEO와 AEO란? 네이버 SEO를 넘어 AI 검색에 노출되는 법",
    description:
      "ChatGPT·제미나이가 답변할 때 우리 브랜드가 언급되게 하는 GEO, 검색 답변에 먼저 인용되게 하는 AEO. 두 개념의 차이와 지금 당장 적용할 방법을 정리했습니다.",
    date: "2026-06-16",
    readingMin: 6,
    tags: ["GEO", "AEO", "AI 검색", "네이버 SEO"],
    blocks: [
      {
        type: "p",
        text: "“검색하면 우리가 1등으로 떠요”라는 말이 더 이상 충분하지 않은 시대가 됐습니다. 사람들은 점점 네이버에 키워드를 치는 대신 ChatGPT나 제미나이에게 ‘어디가 괜찮아?’라고 묻습니다. 이때 AI가 우리 브랜드를 언급하느냐 마느냐가 새로운 승부처입니다. 그 핵심이 바로 GEO와 AEO입니다.",
      },
      { type: "h2", text: "검색은 이미 ‘AI 답변’으로 옮겨가고 있다" },
      {
        type: "p",
        text: "구글은 검색 결과 위에 AI 요약을 붙이고, 네이버도 생성형 답변을 도입하고 있습니다. 사용자는 열 개의 파란 링크를 훑는 대신, AI가 정리해 준 한 문단을 읽고 결정합니다. 그 한 문단에 들어가지 못하면, 아무리 콘텐츠가 많아도 보이지 않는 셈입니다.",
      },
      { type: "h2", text: "GEO란? (Generative Engine Optimization)" },
      {
        type: "p",
        text: "GEO는 ChatGPT·제미나이 같은 ‘생성형 AI’가 답변을 만들 때 우리 브랜드를 추천하거나 인용하도록 만드는 최적화입니다. 검색 순위를 올리는 게 아니라, AI의 ‘대답’ 안에 들어가는 것이 목표입니다.",
      },
      {
        type: "ul",
        items: [
          "브랜드·서비스를 한 문장으로 명확히 설명하는 소개가 있는가",
          "여러 곳(홈페이지·블로그·외부 언급)에서 일관되게 설명되는가",
          "AI가 신뢰할 만한 구체적 정보(지역, 분야, 강점)가 정리돼 있는가",
        ],
      },
      { type: "h2", text: "AEO란? (Answer Engine Optimization)" },
      {
        type: "p",
        text: "AEO는 검색의 ‘답변 영역’과 AI 요약에 우리 정보가 먼저 인용되도록 콘텐츠를 구조화하는 작업입니다. 핵심은 사람들이 실제로 묻는 질문에, 짧고 명확한 답을 미리 배치해 두는 것입니다.",
      },
      {
        type: "ul",
        items: [
          "자주 묻는 질문(FAQ)을 질문–답변 형태로 정리",
          "구조화 데이터(JSON-LD)로 페이지 내용을 기계가 읽게 표시",
          "한 문단 안에 결론부터 말하는 ‘두괄식’ 글쓰기",
        ],
      },
      { type: "h2", text: "네이버 SEO와는 무엇이 다른가" },
      {
        type: "p",
        text: "네이버 SEO가 ‘검색 결과 목록에서 위로 올라가는’ 싸움이라면, GEO·AEO는 ‘AI의 답변 안에 들어가는’ 싸움입니다. 둘은 경쟁 관계가 아니라 보완 관계입니다. 좋은 블로그 콘텐츠(SEO)가 쌓일수록 AI가 인용할 재료(GEO·AEO)도 많아지기 때문입니다. 그래서 네이버 상위노출과 AI 노출은 함께 가야 효과가 큽니다.",
      },
      { type: "h2", text: "지금 당장 할 수 있는 5가지" },
      {
        type: "ul",
        items: [
          "우리 브랜드를 한 문장으로 정의해 홈페이지 맨 위에 배치하기",
          "고객이 자주 묻는 질문 5개를 FAQ로 만들어 답을 두괄식으로 쓰기",
          "홈페이지에 구조화 데이터(JSON-LD) 적용하기",
          "ChatGPT·제미나이에 우리 브랜드를 직접 검색해 ‘지금 뭐라고 답하는지’ 확인하기",
          "핵심 키워드로 블로그 글을 꾸준히 발행해 인용 재료 늘리기",
        ],
      },
      { type: "h2", text: "마치며" },
      {
        type: "p",
        text: "AI 검색은 이미 시작됐고, 먼저 자리 잡는 쪽이 오래 유리합니다. 지금 우리 브랜드가 네이버·ChatGPT·제미나이에서 어떻게 보이는지 점검해 보고 싶다면, 카카오톡으로 편하게 말 걸어 주세요. 키워드별로 실제 노출을 측정해 어디부터 손볼지 알려드리겠습니다.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
