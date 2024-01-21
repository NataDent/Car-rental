import { UnorderedList } from '@chakra-ui/react';
import { CatalogEl } from './CatalogEl';
import { useAds } from 'hooks/useAds';

export const CatalogList = () => {
  const { adverts } = useAds();
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
