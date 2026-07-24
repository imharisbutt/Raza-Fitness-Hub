import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_NAME, verifyToken } from "@/lib/adminToken";

/*
  Next.js 16 renamed Middleware to Proxy. This is the optimistic first gate for
  the admin area: it reads the signed session cookie straight off the request
  (no DB call) and redirects unauthenticated visitors to the login page. Pages
  and API routes re-check auth themselves, so this is defense-in-depth, not the
  only line of defense.
*/
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthed = verifyToken(request.cookies.get(COOKIE_NAME)?.value);

  // Protect everything under /admin except the login page itself.
  if (pathname.startsWith("/admin") && pathname !== "/admin/login" && !isAuthed) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  // Already signed in? Skip the login page.
  if (pathname === "/admin/login" && isAuthed) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/messages";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
