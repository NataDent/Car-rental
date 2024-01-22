import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../redux/operations';
import { setPage } from '../redux/adSlice';
import { Loader } from '../utils/Loader.jsx';
import {
  selectAdverts,
  selectIsError,
  selectIsLoading,
  selectLimit,
  selectPage,
} from '../redux/selectors.js';
import { Button } from '@chakra-ui/react';

export const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const adverts = useSelector(selectAdverts);
  const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const showBtn = !(adverts.length < limit * page);
  const showLoader = isLoading && !isError;

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));
    dispatch(fetchAdverts({ page: nextPage, limit }));
  };

  return (
    <>
      {showLoader && <Loader />}
      {showBtn && (
        <Button colorScheme="#3470ff" type="button" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
};
