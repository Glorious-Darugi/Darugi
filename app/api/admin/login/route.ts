import { NextResponse } from "next/server";
import {
  checkPassword,
  sessionToken,
  ADMIN_COOKIE,
  authConfigured,
} from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!authConfigured) {
    return NextResponse.json(
      { ok: false, error: "no-password-set" },
      { status: 503 }
    );
  }

  const { password } = await req.json().catch(() => ({ password: "" }));
  if (!checkPassword(typeof password === "string" ? password : "")) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
