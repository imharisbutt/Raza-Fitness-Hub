import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  COOKIE_NAME,
  SESSION_MAX_AGE_SECONDS,
  createToken,
  verifyToken,
} from "@/lib/adminToken";

/*
  Cookie-based admin session helpers built on the signed token in adminToken.ts.
  These use next/headers (`cookies()`), so they run in route handlers, server
  actions, and server components — not in proxy.ts (which reads the raw cookie
  off the request instead).
*/

// Called after a correct password — issues the signed session cookie.
export async function setAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, createToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return verifyToken(cookieStore.get(COOKIE_NAME)?.value);
}

// Guard for server components: bounce to the login page when not authenticated.
export async function requireAdmin(): Promise<void> {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }
}
