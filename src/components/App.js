import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const Home = lazy(() => import('pages/Home/Home.js'));
const Catalog = lazy(() => import('pages/Catalog/Catalog.js'));
const Favorites = lazy(() => import('pages/Favorites/Favorites.js'));
const NotFound = lazy(() => import('pages/NotFound.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
