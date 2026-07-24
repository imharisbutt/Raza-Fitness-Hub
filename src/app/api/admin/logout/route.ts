import { NextResponse } from "next/server";
import { clearAdminSession } from "@/lib/auth";

// Clears the admin session cookie.
export async function POST() {
  await clearAdminSession();
  return NextResponse.json({ ok: true });
}
