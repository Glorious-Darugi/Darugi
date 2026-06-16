import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "글을 찾을 수 없습니다 | " + site.name };

  return {
    title: `${post.title} | ${site.name}`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ko-KR",
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <article className="section post">
        <div className="container container--narrow">
          <Link href="/blog" className="post__back">
            ← 블로그 목록
          </Link>

          <div className="post__tags">
            {post.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <h1 className="post__title">{post.title}</h1>
          <div className="post__meta">
            <time dateTime={post.date}>{post.date}</time>
            <span>· 약 {post.readingMin}분 읽기</span>
          </div>

          <div className="post__body">
            {post.blocks.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          <div className="post__cta">
            <h3>지금 우리 노출 상태가 궁금하다면?</h3>
            <p>키워드별 실제 노출을 측정해 어디부터 손볼지 알려드립니다.</p>
            <div className="post__cta-btns">
              <a
                className="btn btn--primary btn--lg"
                href={site.kakaoUrl}
                target="_blank"
                rel="noopener"
              >
                카카오톡으로 상담
              </a>
              <Link className="btn btn--ghost" href="/contact">
                상담 신청 폼
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
