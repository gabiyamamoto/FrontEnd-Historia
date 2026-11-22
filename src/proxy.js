import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const clerkConfigurado = (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "").startsWith("pk_");

const ehRotaProtegida = createRouteMatcher(["/admin/(.+)"]);

const comClerk = clerkMiddleware(async (auth, req) => {
  if (ehRotaProtegida(req)) {
    await auth.protect({ unauthenticatedUrl: new URL("/admin", req.url).toString() });
  }
});

export default function proxy(req, evento) {
  if (!clerkConfigurado) return NextResponse.next();
  return comClerk(req, evento);
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};