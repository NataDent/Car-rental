import { Button, UnorderedList } from '@chakra-ui/react';
import { CatalogEl } from './CatalogEl';
import { useAds } from 'hooks/useAds';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAdverts } from '../redux/operations';
import { setPage } from '../redux/adSlice';

export const CatalogList = () => {
  const { adverts, page, isLoading } = useAds();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts({ page }))
      .then(result => {
        console.log('Adverts from backend:', result.payload);
      })
      .catch(error => {
        console.error('Error fetching adverts:', error);
      });
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(setPage({ page: page + 1, limit: 12 }));
  };

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
        <CatalogEl
          key={advert.id}
          id={advert.id}
          img={advert.img}
          make={advert.make}
          model={advert.model}
          year={advert.year}
          rentalPrice={advert.rentalPrice}
        />
      ))}
      {adverts.length > 0 && !isLoading && adverts.length >= 12 && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </UnorderedList>
  );
};
