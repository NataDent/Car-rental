import {
  HStack,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';

export const Navigation = () => {
  const linkColor = useColorModeValue(
    theme.colors.white,
    theme.colors.darkWhite
  );

  return (
    <HStack as="nav" spacing={5} w="100%" justifyContent="space-around" px={10}>
      <ChakraLink
        as={NavLink}
        to="/"
        fontSize={20}
        fontWeight="bold"
        color={linkColor}
        textDecoration="none"
        _hover={{ transform: 'scale(1.01)' }}
        _activeLink={{
          color: linkColor,
          textDecoration: 'underline',
        }}
      >
        Home
      </ChakraLink>
      <ChakraLink
        as={NavLink}
        to="/catalog"
        fontSize={20}
        fontWeight="bold"
        color={linkColor}
        textDecoration="none"
        _hover={{ transform: 'scale(1.01)' }}
        _activeLink={{
          color: linkColor,
          textDecoration: 'underline',
        }}
      >
        Catalog
      </ChakraLink>
      <ChakraLink
        as={NavLink}
        to="/favorites"
        fontSize={20}
        fontWeight="bold"
        color={linkColor}
        textDecoration="none"
        _hover={{ transform: 'scale(1.01)' }}
        _activeLink={{
          color: linkColor,
          textDecoration: 'underline',
        }}
      >
        Favorites
      </ChakraLink>
    </HStack>
  );
};
