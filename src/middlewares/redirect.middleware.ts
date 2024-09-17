import { NextRequest, NextResponse } from 'next/server';

import { localStorageKey } from 'enum';

export function redirectMiddleware(request: NextRequest) {
  const token = request.cookies.get(localStorageKey.user_token)?.value;
  const signInUrl = new URL('/login', request.url);

  if (!token) {
    if (request.nextUrl.pathname === '/login') {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInUrl);
  }
}
