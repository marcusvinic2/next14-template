'use client';

import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { localStorageKey } from 'enum';
import { decodeToken } from 'functions/token';
import { RefreshLoginAPI } from 'infra/api/refresh/refresh.api';

type TokenAndRrefreshProps = {
  token: string;
  exp: string;
  refresh_token: {
    expiration: string;
    token: string;
  };
};

export const clientMiddleware = async () => {
  const token = getCookie(localStorageKey.user_token);

  if (token) {
    const token_obj: TokenAndRrefreshProps = JSON.parse(token);
    const token_date = new Date(token_obj.exp);
    const current_date = new Date();

    if (token_date < current_date) {
      setCookie(localStorageKey.refreshing_token, 'true');

      // atualiza token
      try {
        const new_credentials = await RefreshLoginAPI({
          access_token: token_obj.token,
          refresh_token: {
            token: token_obj.refresh_token.token,
            expiration: token_obj.refresh_token.expiration
          }
        });

        if (new_credentials.access_token === undefined) {
          deleteCookie(localStorageKey.user_token);
          deleteCookie(localStorageKey.refresh_token);
          deleteCookie(localStorageKey.user_public);
          window.location.href = '/login?acao=login';
        }

        const exp = decodeToken(new_credentials.access_token);

        const expTimestamp = exp?.exp;
        const expirationDate = new Date(expTimestamp! * 1000);

        const dateString = expirationDate;
        const date = new Date(dateString);
        const timestamp = date.getTime();
        const formattedDate = new Date(timestamp).toISOString();

        const login_cookie = {
          token: new_credentials.access_token,
          exp: formattedDate,
          refresh_token: {
            token: new_credentials.refresh_token.token,
            expiration: new_credentials.refresh_token.expiration
          }
        };

        setCookie(localStorageKey.user_token, JSON.stringify(login_cookie));
        window.location.reload();
      } catch (error) {
        deleteCookie(localStorageKey.user_token);
        deleteCookie(localStorageKey.refresh_token);
        deleteCookie(localStorageKey.user_public);
        window.location.href = '/login?acao=login';
      } finally {
        deleteCookie(localStorageKey.refreshing_token);
      }
    }
  }
};
