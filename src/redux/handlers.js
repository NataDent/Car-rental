export const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isError = null;
  state.adverts = [...state.adverts, ...payload];
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};
