"use client";

import { useState } from "react";

export default function AdminLogin({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      window.location.reload();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="admin-login">
      <h1 className="section__title">관리자 로그인</h1>
      <p className="section__lead">접수된 상담 신청을 확인하려면 비밀번호를 입력하세요.</p>

      {!configured ? (
        <div className="form-result">
          <div className="form-result__icon">!</div>
          <h3>비밀번호가 설정되지 않았어요</h3>
          <p>
            환경변수 <code>ADMIN_PASSWORD</code> 를 설정한 뒤 다시 시도하세요.
            (Vercel → Settings → Environment Variables)
          </p>
        </div>
      ) : (
        <form className="form admin-login__form" onSubmit={submit}>
          <label className="form__field">
            <span>비밀번호</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
          </label>
          {status === "error" && (
            <p className="form__error">비밀번호가 일치하지 않습니다.</p>
          )}
          <button
            type="submit"
            className="btn btn--primary btn--lg"
            disabled={status === "loading"}
          >
            {status === "loading" ? "확인 중…" : "로그인"}
          </button>
        </form>
      )}
    </div>
  );
}
