/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-hot-toast';

import { localStorageKey } from 'enum';
import NotFoundError from 'errors/NotFoundError';
import axiosInstance from 'infra/axios';

import { NODE_ENV, uri } from 'constants/environment-variables';

import { AuthTokens, LoginError } from './types';

interface ApiResponse {
  data: AuthTokens;
}

type DecodedToken = {
  guid_organization: string;
  guid_customer: string;
  exp: number;
};

export const requestExample = async (
  email: string,
  password: string
): Promise<AuthTokens | LoginError> => {
  try {
    const response: ApiResponse = await toast.promise(
      axiosInstance.post(`${uri[NODE_ENV]}/example`, {
        email,
        password
      }),
      {
        loading: 'loading',
        success: 'success',
        error: (err: any) => `${err}`
      }
    );

    return response.data;
  } catch (error: any) {
    throw new NotFoundError({
      status: error.response.data.statusCode,
      message: error.response.data.message,
      type: error.response.data.type
    });
  }
};
