import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adverts: [],
  isLoading: false,
  isError: null,
  page: 1,
  limit: 12,
};

const adSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setAdss: (state, action) => {
      state.adverts = action.payload;
    },
    appendAds: (state, action) => {
      state.adverts = [...state.adverts, ...action.payload];
    },
  },
});

export const advertsReducer = adSlice.reducer;
export const { setPage, setAdss, appendAds } = adSlice.actions;
