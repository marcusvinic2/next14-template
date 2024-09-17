/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, ReactNode } from 'react';

type UserContextType = {
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

  const logout = () => {
    console.log('logout')
  }

  const contextValue: UserContextType = {
    logout,
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
