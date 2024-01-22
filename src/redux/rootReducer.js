import { combineReducers } from '@reduxjs/toolkit';
import { advertsReducer } from '../redux/adSlice';
import { favoritesReducer } from '../redux/favoritesSlice';
import { filterReducer } from '../redux/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

export const rootReducer = combineReducers({
  adverts: advertsReducer,
  filter: filterReducer,
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});
