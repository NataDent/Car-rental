import { useSelector } from 'react-redux';
import { selectLiked } from '../redux/selectors';

export const useFavorites = () => {
  return { liked: useSelector(selectLiked) };
};
