import { Center } from '@chakra-ui/react';
import { tipingSVG } from 'utils/tiping-svg';

const Home = () => {
  return (
    <Center
      bgSize="cover"
      bgPosition="center"
      h="100vh" // Высота на весь экран
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      fontSize="2xl"
    >
      {tipingSVG}
    </Center>
  );
};

export default Home;
