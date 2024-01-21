import { useSelector } from 'react-redux';
import {
  selectAdverts,
  selectIsError,
  selectIsLoading,
  selectPage,
  selectLimit,
} from '../redux/selectors.js';

export const useAds = () => {
  return {
    adverts: useSelector(selectAdverts),
    page: useSelector(selectPage),
    limit: useSelector(selectLimit),
    isLoading: useSelector(selectIsLoading),
    isError: useSelector(selectIsError),
  };
};
