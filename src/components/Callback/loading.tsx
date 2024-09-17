import React from 'react';

import { Box, Spinner } from '@chakra-ui/react';

type Props = {
  isLoading: boolean;
};

const LoadingOverlay = ({ isLoading }: Props) => {
  if (!isLoading) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(255, 255, 255, 0.5)"
      zIndex="9999"
    >
      <Spinner size="xl" color="green" />
    </Box>
  );
};

export default LoadingOverlay;
