import { Fragment } from "react";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import ScrollEffects from "@/components/ScrollEffects";
import Rotator from "@/components/Rotator";
import Icon from "@/components/Icon";

const SERVICES = [
  {
    icon: "search",
    title: "네이버 블로그 SEO 상위노출",
    body: "키워드 경쟁도 설계부터 콘텐츠 구조까지, 검색 1페이지에 노출되는 블로그 마케팅을 만듭니다.",
  },
  {
    icon: "ai",
    title: "GEO · 생성형 AI 검색 최적화",
    body: "ChatGPT·Gemini가 답변할 때 당신의 브랜드를 추천·인용하도록 콘텐츠와 신호를 설계합니다.",
  },
  {
    icon: "chat",
    title: "AEO · 답변 엔진 최적화",
    body: "검색 답변과 AI 요약에 우리 정보가 먼저 인용되도록, 질문–답변 구조로 콘텐츠를 정리합니다.",
  },
  {
    icon: "chart",
    title: "AI 노출 점수 진단",
    body: "지금 GPT·Gemini에서 우리 키워드가 뜨는지 점수로 측정해, 어디를 손봐야 할지 알려드립니다.",
  },
  {
    icon: "bolt",
    title: "AI 마케팅 사이트 제작",
    body: "바이브코딩으로 업종 맞춤 마케팅 사이트를 직접 제작합니다. 외주를 거치지 않아 빠르고 정확합니다.",
  },
  {
    icon: "wrench",
    title: "원하는 자동화 MVP 제작",
    body: "반복 업무나 필요한 도구가 있다면, 실제로 작동하는 시제품(MVP)으로 먼저 만들어 드립니다.",
  },
];

const MARQUEE = [
  "네이버 SEO",
  "블로그 상위노출",
  "GEO",
  "AEO",
  "ChatGPT 노출",
  "Gemini 노출",
  "AI 노출 점수 진단",
  "자동화 MVP 제작",
  "키워드 마케팅",
  "AI 사이트 제작",
];

export default function Home() {
  return (
    <main id="main">
      <JsonLd />

      {/* ===================== 히어로 ===================== */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />

        <span className="float-pill float-pill--1" aria-hidden="true">
          #네이버상위노출
        </span>
        <span className="float-pill float-pill--2" aria-hidden="true">
          #ChatGPT노출
        </span>
        <span className="float-pill float-pill--3" aria-hidden="true">
          #Gemini
        </span>
        <span className="float-pill float-pill--4" aria-hidden="true">
          #자동화MVP
        </span>

        <div className="container hero__inner">
          <p className="hero__eyebrow fade-up">
            네이버 SEO · GEO · AEO · 자동화 MVP
          </p>
          <h1 className="hero__title">
            <span className="hero__line fade-up fade-up--1">
              <Rotator />
              <span className="hero__suffix">에서</span>
            </span>
            <span className="hero__line fade-up fade-up--2">
              당신을 <span className="hl">먼저</span> 찾게.
            </span>
          </h1>
          <p className="hero__sub fade-up fade-up--3">
            네이버 블로그 상위노출부터 ChatGPT·Gemini 같은{" "}
            <strong>AI 검색 노출</strong>까지. 마케팅을{" "}
            <strong>직접 만드는</strong> 바이브코더 마케터가 당신의 비즈니스를
            검색 결과 맨 앞에 세웁니다.
          </p>
          <div className="hero__cta fade-up fade-up--4">
            <a
              className="btn btn--primary btn--lg btn--pulse"
              href={site.kakaoUrl}
              target="_blank"
              rel="noopener"
            >
              카카오톡으로 무료 상담
            </a>
            <a className="btn btn--ghost btn--lg" href="#services">
              서비스 보기
            </a>
          </div>
          <ul className="hero__trust fade-up fade-up--5">
            <li>AI 노출 점수 진단</li>
            <li>자동화 MVP 제작</li>
            <li>마케팅부터 제작까지</li>
          </ul>
        </div>

        {/* 키워드 마퀴 */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((i) => (
              <Fragment key={i}>
                {MARQUEE.map((w) => (
                  <span key={`${i}-${w}`}>{w}</span>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 공감(문제 제기) ===================== */}
      <section className="section problem" id="problem">
        <div className="container">
          <h2 className="section__title reveal">
            혹시 이런 고민, 있으신가요?
          </h2>
          <p className="section__lead reveal">
            대부분의 사장님이 똑같이 막히는 지점입니다.
          </p>
          <ul className="problem__list">
            <li className="problem__item reveal">
              블로그를 열심히 써도 <b>검색 상위에 안 뜬다</b>
            </li>
            <li className="problem__item reveal">
              ChatGPT·Gemini에 물어보면 <b>우리 브랜드가 안 나온다</b>
            </li>
            <li className="problem__item reveal">
              광고비는 나가는데 <b>문의로 이어지지 않는다</b>
            </li>
            <li className="problem__item reveal">
              업종을 모르는 대행사라 <b>매번 설명하기 답답하다</b>
            </li>
          </ul>
        </div>
      </section>

      {/* ===================== 서비스 ===================== */}
      <section className="section services" id="services">
        <div className="container">
          <p className="eyebrow reveal">SERVICES</p>
          <h2 className="section__title reveal">
            검색의 모든 입구를 잡아드립니다
          </h2>
          <p className="section__lead reveal">
            네이버부터 생성형 AI까지, 사람들이 찾는 곳마다 당신이 보이게.
          </p>

          <div className="cards">
            {SERVICES.map((s) => (
              <article className="card reveal" key={s.title}>
                <div className="card__icon">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 차별점 ===================== */}
      <section className="section why" id="why">
        <div className="container why__inner">
          <div className="why__copy reveal">
            <p className="eyebrow">WHY {site.name}</p>
            <h2 className="section__title">
              말이 아니라, <span className="hl">결과물로</span> 증명합니다
            </h2>
            <p className="section__lead">
              지금 보고 계신 이 사이트도 제가 직접 만들고, 검색·AI 노출에
              최적화했습니다. 자기 사이트도 검색에 못 띄우는 마케터에게 일을 맡길
              순 없으니까요.
            </p>
            <ul className="checklist">
              <li>
                <b>직접 만든다</b> — 기획·콘텐츠·사이트를 외주 없이 빠르게 실행
              </li>
              <li>
                <b>AI 검색까지 본다</b> — 네이버를 넘어 GPT·Gemini 노출을 점수로
                관리
              </li>
              <li>
                <b>자동화까지 만든다</b> — 필요하면 작동하는 MVP를 직접 제작
              </li>
              <li>
                <b>증명 가능하다</b> — 만든 결과물과 노출 데이터로 보여드립니다
              </li>
            </ul>
          </div>
          <div className="stats reveal">
            {/* ✏️ 실제 수치로 교체하세요 (현재는 예시 값) */}
            <div className="stat">
              <strong data-count="3">0</strong>
              <span>
                개 채널 동시 공략
                <br />
                (네이버·GPT·Gemini)
              </span>
            </div>
            <div className="stat">
              <strong data-count="100">0</strong>
              <span>
                % 직접 제작 · 운영
                <br />
                (외주 없음)
              </span>
            </div>
            <div className="stat">
              <strong data-count="24">0</strong>
              <span>
                시간 내 카톡 회신
                <br />
                (빠른 상담)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 자동화 MVP 제안 ===================== */}
      <section className="section mvp" id="mvp">
        <div className="container mvp__inner">
          <div className="mvp__copy reveal">
            <p className="eyebrow">AUTOMATION MVP</p>
            <h2 className="section__title">
              원하는 자동화, <span className="hl">MVP로 먼저</span> 만들어
              드립니다
            </h2>
            <p className="section__lead">
              마케팅만 하는 게 아니라, <b>직접 만드는</b> 마케터입니다. 반복되는
              업무나 “이런 게 있으면 좋겠다” 싶은 도구가 있다면 말씀만 주세요.
              실제로 작동하는 시제품(MVP)으로 먼저 보여드립니다.
            </p>
            <ul className="checklist">
              <li>블로그·콘텐츠 발행 자동화</li>
              <li>키워드·검색 순위 모니터링</li>
              <li>AI 검색 노출 점수 자동 체크</li>
              <li>그 외 원하는 아이디어 — 일단 말씀만 주세요</li>
            </ul>
            <a
              className="btn btn--primary"
              href={site.kakaoUrl}
              target="_blank"
              rel="noopener"
            >
              아이디어 들고 상담하기
            </a>
          </div>

          <div className="mvp__visual reveal" aria-hidden="true">
            <div className="flow">
              <span className="flow__node">아이디어</span>
              <span className="flow__arrow">→</span>
              <span className="flow__node">MVP 제작</span>
              <span className="flow__arrow">→</span>
              <span className="flow__node flow__node--accent">바로 사용</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 진행 방식 ===================== */}
      <section className="section process" id="process">
        <div className="container">
          <p className="eyebrow reveal">PROCESS</p>
          <h2 className="section__title reveal">
            상담부터 리포트까지, 간단합니다
          </h2>

          <ol className="steps">
            <li className="step reveal">
              <span className="step__no">01</span>
              <h3>무료 상담</h3>
              <p>카카오톡으로 현재 상황과 목표를 편하게 알려주세요.</p>
            </li>
            <li className="step reveal">
              <span className="step__no">02</span>
              <h3>현황 진단</h3>
              <p>키워드·AI 노출 점수를 측정해 지금 위치를 객관적으로 보여드립니다.</p>
            </li>
            <li className="step reveal">
              <span className="step__no">03</span>
              <h3>실행</h3>
              <p>블로그·콘텐츠·사이트를 우선순위대로 직접 만들고 노출시킵니다.</p>
            </li>
            <li className="step reveal">
              <span className="step__no">04</span>
              <h3>리포트 &amp; 개선</h3>
              <p>노출과 문의 변화를 확인하고, 다음 달 전략을 함께 조정합니다.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="section faq" id="faq">
        <div className="container container--narrow">
          <p className="eyebrow reveal">FAQ</p>
          <h2 className="section__title reveal">자주 묻는 질문</h2>

          <div className="faq__list reveal">
            <details>
              <summary>GEO와 AEO가 정확히 무엇인가요?</summary>
              <p>
                GEO는 ChatGPT·Gemini 같은 생성형 AI가 답변할 때 우리 브랜드를
                추천·인용하게 만드는 최적화이고, AEO는 검색 답변·AI 요약에 우리
                정보가 먼저 노출되도록 콘텐츠를 질문–답변 구조로 정리하는
                작업입니다.
              </p>
            </details>
            <details>
              <summary>네이버 블로그 상위노출, 정말 되나요?</summary>
              <p>
                키워드 경쟁도부터 글 구조·체류시간·내부 신호까지 검색 로직에 맞춰
                설계합니다. 업종과 키워드에 따라 결과가 다르므로, 먼저 노출 가능한
                키워드를 진단해 현실적인 목표를 함께 정합니다.
              </p>
            </details>
            <details>
              <summary>우리 업종도 가능한가요?</summary>
              <p>
                네. 업종 특성과 규제(예: 의료광고)를 먼저 파악한 뒤 맞춤으로
                진행합니다. 어떤 분야든 키워드와 검색 흐름부터 진단하니 편하게 문의
                주세요.
              </p>
            </details>
            <details>
              <summary>비용은 어떻게 되나요?</summary>
              <p>
                범위(블로그 운영, 사이트 제작, AI 노출 관리 등)에 따라 달라집니다.
                카카오톡 상담에서 목표를 듣고 필요한 만큼만 제안드립니다.
              </p>
            </details>
            <details>
              <summary>AI 검색 노출 점수 진단은 어떻게 받나요?</summary>
              <p>
                타깃 키워드를 ChatGPT·Gemini 등에서 실제로 검색해 현재 노출
                여부와 점수를 측정해 드립니다. 카카오톡으로 무료 상담을 신청하시면
                진단 절차를 안내합니다.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ===================== 최종 CTA ===================== */}
      <section className="cta-band" id="contact">
        <div className="container cta-band__inner reveal">
          <h2>
            지금 검색에서 밀리고 있다면,
            <br />
            오늘 바로 점검해 보세요.
          </h2>
          <p>30초면 충분합니다. 카카오톡으로 편하게 말 걸어 주세요.</p>
          <a
            className="btn btn--yellow btn--lg"
            href={site.kakaoUrl}
            target="_blank"
            rel="noopener"
          >
            카카오톡으로 무료 상담 신청
          </a>
        </div>
      </section>

      <ScrollEffects />
    </main>
  );
}
