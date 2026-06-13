import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET;
const IS_DEV = process.env.NODE_ENV !== 'production';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // protect these paths
  if (pathname.startsWith('/portofolio') || pathname.startsWith('/wallet')) {
    // If no JWT secret is configured and we're in development, skip server-side
    // auth so client-side sign-in (zustand store) can be used for local testing.
    // In production a JWT secret MUST be set.
    if (!JWT_SECRET && IS_DEV) {
      // allow through in dev when no secret is present
      return NextResponse.next();
    }

    const token = req.cookies.get('mi_token')?.value;
    if (!token || !JWT_SECRET) {
      const url = req.nextUrl.clone();
      url.pathname = '/signin';
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
    try {
      jwt.verify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (e) {
      const url = req.nextUrl.clone();
      url.pathname = '/signin';
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portofolio/:path*', '/wallet/:path*'],
};
