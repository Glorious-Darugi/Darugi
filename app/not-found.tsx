import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="section notfound">
        <div className="container container--narrow">
          <p className="notfound__code">404</p>
          <h1 className="section__title">페이지를 찾을 수 없어요</h1>
          <p className="section__lead">
            주소가 바뀌었거나 사라진 페이지일 수 있어요. 아래에서 다시 시작해
            보세요.
          </p>
          <div className="notfound__btns">
            <Link className="btn btn--primary btn--lg" href="/">
              홈으로 가기
            </Link>
            <Link className="btn btn--ghost" href="/blog">
              블로그 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
