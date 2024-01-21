import { Box } from '@chakra-ui/react';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <Box
      as="header"
      backgroundColor="transparent"
      display="flex"
      justifyContent="center"
      align-items="center"
      mb={10}
      p={2}
      zIndex="2"
    >
      <Navigation />
    </Box>
  );
};
