// api/logout/route.ts
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST() {
  const isProduction = process.env.NODE_ENV === "production"
  ;(await cookies()).delete("session")
  ;(await cookies()).set("session", "", {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  })
  return NextResponse.json({ success: true })
}
