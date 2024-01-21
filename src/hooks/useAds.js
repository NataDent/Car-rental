import { useSelector } from 'react-redux';
import {
  selectAdverts,
  selectIsError,
  selectIsLoading,
} from '../redux/selectors.js';

export const useAds = () => {
  return {
    adverts: useSelector(selectAdverts),
    isLoading: useSelector(selectIsLoading),
    isError: useSelector(selectIsError),
  };
};
