import { NextRequest, NextResponse } from 'next/server';

export async function authMiddleware(request: NextRequest) {
  // indev
  return NextResponse.next();
}
