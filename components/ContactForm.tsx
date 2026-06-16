"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error" | "needsConfig";

const SERVICES = [
  "네이버 블로그 SEO",
  "GEO·AEO (AI 검색 노출)",
  "AI 마케팅 사이트 제작",
  "자동화 MVP 제작",
  "아직 모르겠어요 / 상담 후 결정",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    contact: "",
    business: "",
    service: SERVICES[0],
    keyword: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const composeText = () =>
    [
      `이름: ${form.name}`,
      `연락처: ${form.contact}`,
      `업종/비즈니스: ${form.business}`,
      `관심 서비스: ${form.service}`,
      form.keyword ? `관심 키워드: ${form.keyword}` : null,
      "",
      form.message,
    ]
      .filter((l) => l !== null)
      .join("\n");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // 1) Formspree 등 엔드포인트가 설정된 경우
    if (site.formEndpoint) {
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: JSON.stringify({ ...form, _subject: `[상담신청] ${form.name}` }),
        });
        setStatus(res.ok ? "success" : "error");
      } catch {
        setStatus("error");
      }
      return;
    }

    // 2) 이메일만 설정된 경우 → 메일 앱으로
    if (site.email) {
      const subject = encodeURIComponent(`[상담신청] ${form.name || "문의"}`);
      const body = encodeURIComponent(composeText());
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    // 3) 아무것도 설정 안 된 경우 → 카톡으로 안내
    setStatus("needsConfig");
  };

  if (status === "success") {
    return (
      <div className="form-result">
        <div className="form-result__icon">✓</div>
        <h3>상담 신청이 접수됐어요</h3>
        <p>빠르게 확인하고 연락드릴게요. 급하시면 카카오톡으로 바로 말 걸어 주세요.</p>
        <a
          className="btn btn--primary"
          href={site.kakaoUrl}
          target="_blank"
          rel="noopener"
        >
          카카오톡으로 바로 상담
        </a>
      </div>
    );
  }

  if (status === "needsConfig") {
    return (
      <div className="form-result">
        <div className="form-result__icon">💬</div>
        <h3>지금은 카카오톡으로 받고 있어요</h3>
        <p>
          아래 버튼으로 편하게 말 걸어 주세요. (운영자: 폼 자동 접수를 켜려면
          <code> lib/site.ts</code>의 <code>formEndpoint</code> 또는{" "}
          <code>email</code>을 채우세요.)
        </p>
        <a
          className="btn btn--primary"
          href={site.kakaoUrl}
          target="_blank"
          rel="noopener"
        >
          카카오톡으로 상담하기
        </a>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <label className="form__field">
          <span>이름 *</span>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="홍길동"
          />
        </label>
        <label className="form__field">
          <span>연락처 (전화/이메일) *</span>
          <input
            required
            value={form.contact}
            onChange={update("contact")}
            placeholder="010-0000-0000"
          />
        </label>
      </div>

      <label className="form__field">
        <span>업종 / 비즈니스 *</span>
        <input
          required
          value={form.business}
          onChange={update("business")}
          placeholder="예: 강남 OO의원, 건축 감리, 카페 등"
        />
      </label>

      <div className="form__row">
        <label className="form__field">
          <span>관심 서비스</span>
          <select value={form.service} onChange={update("service")}>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="form__field">
          <span>관심 키워드 (선택)</span>
          <input
            value={form.keyword}
            onChange={update("keyword")}
            placeholder="예: 강남 임플란트"
          />
        </label>
      </div>

      <label className="form__field">
        <span>문의 내용</span>
        <textarea
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="현재 상황이나 목표를 자유롭게 적어주세요."
        />
      </label>

      {status === "error" && (
        <p className="form__error">
          전송에 실패했어요. 잠시 후 다시 시도하거나 카카오톡으로 문의해 주세요.
        </p>
      )}

      <button
        type="submit"
        className="btn btn--primary btn--lg form__submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "전송 중…" : "상담 신청하기"}
      </button>
      <p className="form__hint">
        남겨주신 정보는 상담 목적 외에 사용하지 않습니다.
      </p>
    </form>
  );
}
