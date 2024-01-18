import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectIsError = state => state.adverts.isError;

export const selectFilter = state => state.filter.filter;

export const selectFilteredAds = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    return adverts.filter(item =>
      item.make.toLowerCase().includes(filter.tolowercase())
    );
  }
);
