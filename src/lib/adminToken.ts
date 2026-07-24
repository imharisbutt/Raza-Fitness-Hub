import crypto from "node:crypto";

/*
  Minimal signed-token session for the single-admin dashboard — no external auth
  library needed. The cookie value is `admin.<expiry>.<HMAC>`; the HMAC is signed
  with ADMIN_SESSION_SECRET so a visitor can't forge it by hand-setting a cookie.

  Kept dependency-free (only node:crypto) so it can run in `proxy.ts`, route
  handlers, and server components alike.
*/
export const COOKIE_NAME = "rfh_admin_session";

// 8-hour session.
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

function secret(): string {
  return process.env.ADMIN_SESSION_SECRET ?? "";
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function createToken(): string {
  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = `admin.${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyToken(token: string | undefined): boolean {
  if (!token || !secret()) return false;

  const lastDot = token.lastIndexOf(".");
  if (lastDot <= 0) return false;

  const payload = token.slice(0, lastDot);
  const signature = token.slice(lastDot + 1);
  const expected = sign(payload);

  // Constant-time comparison to avoid leaking the signature via timing.
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;

  const expiresAt = Number(payload.split(".")[1]);
  return Number.isFinite(expiresAt) && Date.now() < expiresAt;
}
