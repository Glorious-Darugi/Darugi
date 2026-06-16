import { Redis } from "@upstash/redis";

/**
 * 상담 신청 저장소 (Upstash Redis / Vercel KV).
 * 환경변수가 없으면 storeConfigured=false 가 되어 폼은 카톡 안내로 폴백합니다.
 *  - UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN  (Upstash)
 *  - 또는 KV_REST_API_URL / KV_REST_API_TOKEN          (Vercel KV)
 */
const url =
  process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "";
const token =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || "";

export const storeConfigured = Boolean(url && token);

const redis = storeConfigured ? new Redis({ url, token }) : null;

const KEY = "darugi:contact";

export type Submission = {
  id: string;
  name: string;
  contact: string;
  business: string;
  service: string;
  keyword: string;
  message: string;
  createdAt: string;
};

export async function saveSubmission(
  data: Omit<Submission, "id" | "createdAt">
): Promise<Submission> {
  if (!redis) throw new Error("store-not-configured");
  const sub: Submission = {
    ...data,
    id: globalThis.crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  await redis.lpush(KEY, JSON.stringify(sub));
  return sub;
}

export async function getSubmissions(limit = 300): Promise<Submission[]> {
  if (!redis) return [];
  const items = await redis.lrange<string | Submission>(KEY, 0, limit - 1);
  return items.map((it) =>
    typeof it === "string" ? (JSON.parse(it) as Submission) : it
  );
}
