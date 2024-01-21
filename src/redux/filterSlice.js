import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBrand: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    resetFilters: state => {
      state.selectedBrand = '';
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setSelectedBrand } = filterSlice.actions;
