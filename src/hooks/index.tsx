import React, { ReactNode, useEffect, useState } from 'react';
import { UserContextProvider } from './useUser';

interface iContextProvider {
  children: ReactNode;
}

export const ContextProvider: React.FC<iContextProvider> = ({
  children
}: iContextProvider) => {
  const [loadCss, setLoadingCss] = useState<boolean>(false);

  useEffect(() => {
    setLoadingCss(true);
  }, []);

  return (
    <>
        <UserContextProvider>
          {children}
        </UserContextProvider>
    </>
  );
};
