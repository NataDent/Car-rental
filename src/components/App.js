import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import NotFound from 'pages/NotFound';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { getAdverts } from '../redux/operations';

const Home = lazy(() => import('pages/Home/Home.js'));
const Catalog = lazy(() => import('pages/Catalog/Catalog.js'));
const Favorites = lazy(() => import('pages/Favorites/Favorites.js'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
