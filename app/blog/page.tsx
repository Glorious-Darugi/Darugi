import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "블로그 | " + site.name,
  description:
    "네이버 SEO, GEO·AEO, AI 검색 노출에 대한 실전 가이드. 검색과 AI가 먼저 찾는 마케팅 노하우를 정리합니다.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "블로그 | " + site.name,
    description: "네이버 SEO·GEO·AEO 실전 가이드.",
    url: "/blog",
  },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main id="main">
      <section className="section blog-hero">
        <div className="container">
          <p className="eyebrow">BLOG</p>
          <h1 className="section__title">검색·AI 노출 인사이트</h1>
          <p className="section__lead">
            네이버 SEO부터 GEO·AEO까지, 실제로 먹히는 노하우만 정리합니다.
          </p>

          {sorted.length === 0 ? (
            <p className="blog-empty">첫 글을 준비하고 있어요. 곧 찾아옵니다 ✍️</p>
          ) : (
            <div className="blog-grid">
              {sorted.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card__tags">
                    {post.tags.slice(0, 3).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="blog-card__meta">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>· 약 {post.readingMin}분</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
