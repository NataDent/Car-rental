import { Box, Text } from '@chakra-ui/react';
import { Header } from './Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box py={2}>
      <Header />
      <Suspense fallback={<Text>Loading...</Text>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
