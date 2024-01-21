import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedAds: JSON.parse(localStorage.getItem('likedCars')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleLikedAd: (state, action) => {
      const adId = action.payload;
      if (state.likedAds.includes(adId)) {
        state.likedAds = state.likedAds.filter(id => id !== adId);
      } else {
        state.likedAds.push(adId);
      }
      localStorage.setItem('likedCars', JSON.stringify(state.likedAds));
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { toggleLikedAd } = favoritesSlice.actions;
