import { Box, Text } from '@chakra-ui/react';
import { Header } from './Header';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  const backgroundImageUrl =
    'https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857_640.jpg';

  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <Box
      position="relative"
      bg={isHome ? `url('${backgroundImageUrl}')` : 'transparent'}
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      display="flex"
      flexDirection="column"
      py={2}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(200, 200, 200, 0.5)" // Эффект затемнения
      />
      <Box
        // filter="blur(4px)" // Эффект размытия
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="1"
      >
        <Header />
        <main>
          <Suspense fallback={<Text>Loading...</Text>}>
            <Outlet />
          </Suspense>
        </main>
        <ToastContainer position="top-right" reverseOrder={false} />
      </Box>
    </Box>
  );
};
