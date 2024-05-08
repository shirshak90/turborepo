import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const isVerified = await jwtVerify(
    request.headers.get("authorization") ?? "",
    new TextEncoder().encode(process.env.NEXTAUTH_SECRET)
  );

  if (Boolean(!isVerified)) return NextResponse.json("Error", { status: 401 });
  return NextResponse.next();
}

export const config = {
  matcher: "/api/test",
};
