import { useSelector } from 'react-redux';
import { selectAdverts, selectIsError, selectIsLoading } from 'redux/selectors';

export const useAds = () => {
  return {
    adverts: useSelector(selectAdverts),
    isLoading: useSelector(selectIsLoading),
    isError: useSelector(selectIsError),
  };
};
