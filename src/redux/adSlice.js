import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';
import { handleFulfilled, handlePending, handleRejected } from './handlers';

const adSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = adSlice.reducer;
