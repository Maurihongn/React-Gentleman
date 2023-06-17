import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-custom-header', 'hello');
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (request.nextUrl.pathname.endsWith('/information')) {
    return NextResponse.redirect(
      new URL('/information/characters', request.url)
    );
  }
  if (request.nextUrl.pathname.startsWith('/information')) {
    const user = {
      name: 'John Doe',
      authenticated: true,
    };
    if (!user.authenticated) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  return response;
}

export const config = {
  matcher: ['/information/:path*'],
};
