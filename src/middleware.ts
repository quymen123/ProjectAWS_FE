import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {

    const path = req.nextUrl.pathname
    const isLoggedIn = req.cookies.get("auth") || false

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-pathname", path);

    if (path === "/" && !isLoggedIn) {
        return NextResponse.redirect(new URL("/auth/login", req.nextUrl))
    }

    return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
}

export const config = {
  unstable_allowDynamic: [
    // allows a single file
    '/lib/utilities.js',
    // use a glob to allow anything in the function-bind 3rd party module
    '/node_modules/function-bind/**',
  ],
}
