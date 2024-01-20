import {
  HStack,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';

export const Navigation = () => {
  const linkColor = useColorModeValue(theme.colors.blue, theme.colors.darkBlue);

  return (
    <HStack as="nav" spacing={5}>
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
        }}
      >
        Home
      </ChakraLink>
      <ChakraLink as={NavLink} to="/catalog">
        Catalog
      </ChakraLink>
      <ChakraLink as={NavLink} to="/favorites">
        Favorites
      </ChakraLink>
    </HStack>
  );
};
