import { NextResponse } from "next/server";
import { saveSubmission, storeConfigured } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const clip = (v: unknown, max: number) =>
  typeof v === "string" ? v.slice(0, max).trim() : "";

export async function POST(req: Request) {
  if (!storeConfigured) {
    return NextResponse.json(
      { ok: false, error: "store-not-configured" },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = clip(body.name, 60);
  const contact = clip(body.contact, 120);
  const business = clip(body.business, 120);

  if (!name || !contact || !business) {
    return NextResponse.json(
      { ok: false, error: "missing-fields" },
      { status: 400 }
    );
  }

  try {
    await saveSubmission({
      name,
      contact,
      business,
      service: clip(body.service, 60),
      keyword: clip(body.keyword, 120),
      message: clip(body.message, 2000),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "save-failed" }, { status: 500 });
  }
}
