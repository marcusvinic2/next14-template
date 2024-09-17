import React, { ReactNode, useEffect, useState } from 'react';

import { CartContextProvider } from './useCart';
import { ModalConextProvider } from './useModal';
import { ProductContextProvider } from './useProduct';
import { TemplateContextProvider } from './useTemplate';
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
      <ModalConextProvider>
        <UserContextProvider>
          <TemplateContextProvider>
            <CartContextProvider>
              <ProductContextProvider>{children}</ProductContextProvider>
            </CartContextProvider>
          </TemplateContextProvider>
        </UserContextProvider>
      </ModalConextProvider>
    </>
  );
};
