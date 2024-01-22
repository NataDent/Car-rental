import { UnorderedList } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../redux/selectors';
import { CatalogEl } from './CatalogEl';

export const CatalogList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <UnorderedList
      display="flex"
      flexDirection="column"
      mt={5}
      px={5}
      maxW="50%"
      mx="auto"
    >
      {adverts.map(advert => (
        <CatalogEl key={advert.id} advert={advert} />
      ))}
    </UnorderedList>
  );
};
