import { Spinner, Stack } from '@chakra-ui/react';

export const LoadingComponent = () => {
  return (
    <Stack
      direction="row"
      spacing={4}
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <Spinner size="xl" speed="0.65s" thickness="4px" color="green.500" />
    </Stack>
  );
};
