import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const useFilter = () => {
  return {
    filter: useSelector(selectFilter),
  };
};
