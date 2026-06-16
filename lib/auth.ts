import crypto from "crypto";

/**
 * 관리자(admin) 비밀번호 인증.
 * 환경변수 ADMIN_PASSWORD 를 설정하면 활성화됩니다.
 * 쿠키에는 비밀번호 대신 HMAC 토큰만 저장합니다(비밀번호 노출 X).
 */
export const ADMIN_COOKIE = "darugi_admin";

const password = process.env.ADMIN_PASSWORD || "";
export const authConfigured = Boolean(password);

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

export function checkPassword(input: string): boolean {
  if (!password) return false;
  return safeEqual(input, password);
}

export function sessionToken(): string {
  return crypto
    .createHmac("sha256", password || "unset")
    .update("darugi-admin-v1")
    .digest("hex");
}

export function verifySession(token?: string): boolean {
  if (!password || !token) return false;
  return safeEqual(token, sessionToken());
}
