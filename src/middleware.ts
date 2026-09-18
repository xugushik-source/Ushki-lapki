import { NextRequest, NextResponse } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "@/types";

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|brand|sitemap.xml|robots.txt).*)"],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = LOCALES.find((locale) =>
    acceptLanguage.toLowerCase().includes(locale),
  );
  const locale = preferred ?? DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}
