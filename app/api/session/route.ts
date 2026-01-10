//api/session/route.ts
import { adminAuth } from "@/lib/firebaseAdmin"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization") || ""
    const hasBearer = authHeader.toLowerCase().startsWith("bearer ")
    const idToken = hasBearer ? authHeader.slice(7).trim() : undefined

    if (!idToken) {
      return NextResponse.json({ error: "Missing Bearer token" }, { status: 401 })
    }

    const decoded = await adminAuth.verifyIdToken(idToken)

    const isProduction = process.env.NODE_ENV === "production"
    const maxAgeSeconds = Number(process.env.SESSION_COOKIE_MAX_AGE_SEC || 60 * 60 * 24 * 5) // default 5 days

    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: maxAgeSeconds * 1000,
    })

    ;(await cookies()).set("session", sessionCookie, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      path: "/",
      maxAge: maxAgeSeconds,
    })

    return NextResponse.json({ uid: decoded.uid })
  } catch (err) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
  }
}
