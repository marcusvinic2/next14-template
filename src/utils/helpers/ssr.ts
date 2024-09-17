'use server';

import { cookies } from 'next/headers';

import { localStorageKey } from 'enum';

/**
 * @returns retorna cookie pelo nome (tipo string)
 * @returns verifica se token do cookie expirou, caso sim dispara refresh e salva novo token
 */

export async function deleteCookie(name: string): Promise<boolean> {
  const cookieStore = cookies();
  cookieStore.delete(name);
  return true;
}

export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = cookies();
  const refresh_date = cookieStore.get(localStorageKey.refresh_token)?.value;
  const token = cookieStore.get(localStorageKey.user_token);

  if (token && refresh_date) {
    const response = cookieStore.get(name)
      ? cookieStore.get(name)?.value
      : undefined;
    return response;
  }

  return undefined;
}
