import { NextResponse } from "next/server";
import { parseCookies } from "nookies";
import { getToken } from "next-auth/jwt";

export default async function middleware(req) {
  const jwt = req.cookies["jwt"];

  const privatePaths = [/\/privateRoute2/, /\/privateRoute1\/*/];
  const isPrivate = privatePaths.some((rx) => rx.test(req.nextUrl.pathname));
  if (isPrivate && !jwt) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url, 302);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};
