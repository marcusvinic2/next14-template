import { NextRequest, NextResponse } from 'next/server';

import { privateRoutes } from 'constants/private-routes';

import { authMiddleware } from './middlewares/auth.middleware';
import { redirectMiddleware } from './middlewares/redirect.middleware';

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  const isPrivateRoute = privateRoutes.some((route) => route === currentPath);

  // executa apenas em rotas privadas!
  if (isPrivateRoute) {
    const redirectResponse = redirectMiddleware(request);
    if (redirectResponse) return redirectResponse;
  }

  // em todas as rotas irá verificar exp do token
  const authResponse = authMiddleware(request);
  if (authResponse) return authResponse;

  return NextResponse.next();
}

export const config = {
  matcher: ['/(.*)']
};
