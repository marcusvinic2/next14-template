'use client';

import React, { ReactNode } from 'react';

import {
  Modal as ChakraModal,
  ModalProps as ChakraModalProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import { useModalContext } from '../../../hooks/useModal';

interface iModalProps extends ChakraModalProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
}

export const Modal: React.FC<iModalProps> = ({
  title,
  children,
  isOpen,
  ...rest
}: iModalProps) => {
  const { onClose } = useModalContext();

  return (
    <>
      <ChakraModal isOpen={isOpen} isCentered {...rest}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody height="30">{children}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};
