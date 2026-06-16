"use client";

export default function LogoutButton() {
  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  };
  return (
    <button type="button" className="btn btn--ghost btn--sm" onClick={logout}>
      로그아웃
    </button>
  );
}
