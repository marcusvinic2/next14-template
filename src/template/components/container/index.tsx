import React from "react";
import * as C from './styles'

type MainProps = {
  children: React.ReactNode;
};

export const ContainerComponent = ({ children }: MainProps) => {
  return (
    <C.Container>
      {children}
    </C.Container>
  );
};
