import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  make: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.make = action.payload.make;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions.changeFilter;
