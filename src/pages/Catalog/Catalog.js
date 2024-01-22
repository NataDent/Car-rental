import { Box } from '@chakra-ui/react';
import { CatalogList } from 'components/CatalogList';
import { Filter } from 'components/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/adSlice';
import { fetchAdverts } from '../../redux/operations';
import { LoadMore } from 'components/LoadMore';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(fetchAdverts({ page: 1 }));
  }, [dispatch]);

  return (
    <Box bg="white">
      <Filter />
      <CatalogList />
      <LoadMore />
    </Box>
  );
};

export default Catalog;
