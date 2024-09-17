'use client';

import Image from 'next/image';

import * as C from './styles';

type Props = {
  title: string;
  src: string;
};

export const EmptyComponent = ({ title, src }: Props) => {
  return (
    <C.Container>
      <Image src={src} alt={title} />
      <C.Title>{title}</C.Title>
    </C.Container>
  );
};
