import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  adverts: [],
  isLoading: false,
  isError: null,
  page: 1,
  limit: 12,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        if (state.page > 1) {
          state.adverts = [...state.adverts, ...action.payload];
        } else {
          state.adverts = action.payload;
        }
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;
export const { setPage } = advertsSlice.actions;
