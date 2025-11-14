// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  const fromHost = "bimbeldi-mdiq-two.vercel.app";
  const targetHost = "bimbeldi.mdiq.biz.id";

  // Pastikan *tepat sama* agar tidak looping
  if (host === fromHost) {
    const url = req.nextUrl.clone();
    url.host = targetHost; // pakai host, bukan hostname
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
