import axios from 'axios';
import { getCookie, deleteCookie } from 'cookies-next';
import { localStorageKey } from 'enum';
import { clientMiddleware } from 'middlewares/client.middleware';

import { get_current_config } from 'constants/environment-variables';

type TokenProps = {
  token: string;
  exp: string;
};

const axiosInstance = axios.create({
  baseURL: `${get_current_config().api_next}`
});

// Interceptor de requisição
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getCookie(localStorageKey.user_token);
    const token_value: TokenProps = token ? JSON.parse(token) : '';

    config.headers['Organization-Guidkey'] =
      get_current_config().organization_guidkey;
    config.headers['Id-Session'] = getCookie(localStorageKey.session_id);
    config.headers['Ip-Address'] = '192.168.1.188';
    config.headers['Browser'] = navigator.userAgent.toLowerCase();
    config.headers['Operational-System'] = navigator.userAgent.toLowerCase();

    if (token) {
      config.headers.Authorization = `Bearer ${token_value.token}`;
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// Interceptor de resposta
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      //error status 401

      try {
        // refresh token
        await clientMiddleware();
      } catch (error) {
        // actions erros
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
