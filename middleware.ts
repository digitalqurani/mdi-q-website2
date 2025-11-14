import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || ""
  const fromHost = "bimbeldi-mdiq-two.vercel.app"
  const targetHost = "bimbeldi.mdiq.biz.id"

  if (hostname === fromHost) {
    const url = req.nextUrl.clone()
    url.hostname = targetHost
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = { matcher: ["/:path*"] }
