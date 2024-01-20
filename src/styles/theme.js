import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: '#FFF',
    darkWhite: '#F7F7FB',
    darkBlue: '#0B44CD',
    blue: '#3470FF',
    grey: '#8A8A89',
    darkGrey: '#F3F3F2',
    black: '#121417',
  },
  breakpoints: {
    base: '0em',
    sm: '30em',
    md: '48em',
    xl: '80em',
  },
});
