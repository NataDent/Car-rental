import { Box, Container } from '@chakra-ui/react';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="center"
      align-items="center"
      mb={10}
      borderBottom="2px"
      borderColor="brand.900"
      p={2}
    >
      <Container
        maxW="container.lg"
        display="flex"
        justifyContent="space-between"
        align-items="center"
      >
        <Navigation />
      </Container>
    </Box>
  );
};
