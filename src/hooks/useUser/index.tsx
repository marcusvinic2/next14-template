/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, ReactNode } from 'react';

import { getCookie, deleteCookie } from 'cookies-next';
import { localStorageKey } from 'enum';
import { PublicUserAPI } from 'infra/api/user/user.api';
import { Customer } from 'infra/api/user/user.types';
import jwt from 'jsonwebtoken';

type DecodedToken = {
  guid_organization: string;
  guid_customer: string;
};

type TokenProps = {
  token: string;
  exp: string;
  refresh_token: {
    expiration: string;
    token: string;
  };
};

type UserContextType = {
  user: Customer | undefined;
  setUser: React.Dispatch<React.SetStateAction<Customer | undefined>>;
  publicUser: () => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children
}) => {
  const router = useRouter();
  const [user, setUser] = useState<Customer>();

  function decodeToken(token: string): DecodedToken | null {
    try {
      const decoded = jwt.decode(token) as DecodedToken;
      return decoded;
    } catch (error) {
      console.error('Error ao decodificar token:', error);
      return null;
    }
  }

  // destroi a sessão
  const logout = () => {
    deleteCookie(localStorageKey.user_token);
    deleteCookie(localStorageKey.refresh_token);
    deleteCookie(localStorageKey.user_public);
    setUser(undefined);
    //return router.push('/log');
  };

  // verifica se usuario estiver logado e obtem as infos
  const publicUser = async () => {
    try {
      const token = await getCookie(localStorageKey.user_token);
      const public_client = await getCookie(localStorageKey.user_public);

      const public_client_json = public_client
        ? JSON.parse(public_client)
        : null;

      if (token) {
        const token_value: TokenProps = JSON.parse(token);
        const user_data = decodeToken(token_value.token);
        const user_public =
          public_client_json || (await PublicUserAPI(user_data!.guid_customer));
        setUser(user_public);
      } else {
        setUser(undefined);
      }
    } catch (error) {
      setUser(undefined);
    }
  };

  const contextValue: UserContextType = {
    logout,
    publicUser,
    user,
    setUser
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Ocorreu um erro ao chamar o UserContextProvider');
  }

  return context;
};
