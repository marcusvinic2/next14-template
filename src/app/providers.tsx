'use client';

import { Next13ProgressBar } from 'next13-progressbar';
import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { fonts } from '../../public/fonts/fonts';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <style>
        {`
          :root {
            --kanit: ${fonts.kanit.style.fontFamily};
            --lato: ${fonts.lato.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider>
        {children}
        <Next13ProgressBar
          height="7px"
          color="#008000"
          options={{ showSpinner: false }}
          showOnShallow
        />
      </ChakraProvider>
    </React.Fragment>
  );
}
