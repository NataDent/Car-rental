import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.adverts;

export const selectPage = state => state.adverts.page;

export const selectLimit = state => state.adverts.limit;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectIsError = state => state.adverts.isError;

export const selectFilter = state => state.filter.selectedBrand;

export const selectLiked = state => state.favorites.likedAds;

export const selectFilteredAds = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    return adverts.filter(item =>
      item.make.toLowerCase().includes(filter.tolowercase())
    );
  }
);
