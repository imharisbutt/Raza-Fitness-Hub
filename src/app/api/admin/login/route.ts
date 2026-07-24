import { NextResponse, type NextRequest } from "next/server";
import { setAdminSession } from "@/lib/auth";

/*
  Verifies the admin password against ADMIN_PASSWORD and, on success, sets the
  signed httpOnly session cookie. Kept deliberately simple for a single-admin
  dashboard — swap for a real auth provider if multiple users are ever needed.
*/
export async function POST(request: NextRequest) {
  let body: { password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    console.error("[admin] ADMIN_PASSWORD is not set.");
    return NextResponse.json(
      { error: "Admin login is not configured." },
      { status: 500 },
    );
  }

  const password = typeof body.password === "string" ? body.password : "";
  if (password !== expected) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  await setAdminSession();
  return NextResponse.json({ ok: true });
}
