import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';
import { handleFulfilled, handlePending, handleRejected } from './handlers';

const adSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
    page: 1,
    limit: 12,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = adSlice.reducer;
export const { setPage } = adSlice.actions;
