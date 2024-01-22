import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.adverts.push(action.payload.advert);
    },
    removeFavorite(state, action) {
      state.items = state.items.filter(
        item => item.id !== action.payload.advert.id
      );
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
