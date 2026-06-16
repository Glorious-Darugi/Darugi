import type { Metadata } from "next";
import { cookies } from "next/headers";
import { verifySession, ADMIN_COOKIE, authConfigured } from "@/lib/auth";
import { getSubmissions, storeConfigured } from "@/lib/store";
import AdminLogin from "@/components/AdminLogin";
import LogoutButton from "@/components/LogoutButton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "관리자",
  robots: { index: false, follow: false },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminPage() {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;

  if (!verifySession(token)) {
    return (
      <main id="main">
        <section className="section admin">
          <div className="container container--narrow">
            <AdminLogin configured={authConfigured} />
          </div>
        </section>
      </main>
    );
  }

  const submissions = await getSubmissions();

  return (
    <main id="main">
      <section className="section admin">
        <div className="container">
          <div className="admin__head">
            <div>
              <p className="eyebrow">ADMIN</p>
              <h1 className="section__title">상담 신청 내역</h1>
              <p className="admin__count">
                총 <b>{submissions.length}</b>건
                {!storeConfigured && " · ⚠️ 저장소(DB) 미설정"}
              </p>
            </div>
            <LogoutButton />
          </div>

          {!storeConfigured ? (
            <div className="form-result">
              <div className="form-result__icon">!</div>
              <h3>저장소가 연결되지 않았어요</h3>
              <p>
                상담 신청을 저장하려면 Upstash Redis(또는 Vercel KV)를 연결하고
                환경변수를 설정하세요. (README 8번 참고)
              </p>
            </div>
          ) : submissions.length === 0 ? (
            <div className="admin-empty">아직 접수된 상담 신청이 없습니다.</div>
          ) : (
            <ul className="admin-list">
              {submissions.map((s) => (
                <li key={s.id} className="admin-card">
                  <div className="admin-card__top">
                    <strong>{s.name}</strong>
                    <span className="admin-card__date">
                      {formatDate(s.createdAt)}
                    </span>
                  </div>
                  <dl className="admin-card__grid">
                    <div>
                      <dt>연락처</dt>
                      <dd>{s.contact}</dd>
                    </div>
                    <div>
                      <dt>업종</dt>
                      <dd>{s.business}</dd>
                    </div>
                    <div>
                      <dt>관심 서비스</dt>
                      <dd>{s.service || "-"}</dd>
                    </div>
                    <div>
                      <dt>관심 키워드</dt>
                      <dd>{s.keyword || "-"}</dd>
                    </div>
                  </dl>
                  {s.message && <p className="admin-card__msg">{s.message}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
