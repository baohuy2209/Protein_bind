import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const token = await getToken({ req });
  if (!token) {
    return NextResponse.redirect(new URL("/auth-page/signin", req.url));
  }
  return NextResponse.next();
}
