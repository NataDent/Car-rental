import { UnorderedList } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../redux/selectors';
import { CatalogEl } from './CatalogEl';

export const CatalogList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <UnorderedList
      display="flex"
      flexWrap=" wrap"
      justifyContent="center"
      gap="50px 29px"
      m="0 auto 100px"
    >
      {adverts.map(advert => (
        <CatalogEl key={advert.id} advert={advert} />
      ))}
    </UnorderedList>
  );
};
