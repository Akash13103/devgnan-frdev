import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  watchedStocks: [],
  selectedStock: null,
};
const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    // TODO: Add stock to watchlist
    addToWatchlist: (state, action) => {
      state.watchedStocks.push(action.payload);
    },

    // TODO: Remove from watchlist
    removeFromWatchlist: (state, action) => {
      state.watchedStocks = state.watchedStocks.filter(
        (stock) => stock.id !== action.payload
      );
    },

    // TODO: Select a stock to view details
    selectStock: (state, action) => {
      state.selectedStock = action.payload;
    },

    // TODO: Clear selection
    clearSelection: (state) => {
      state.selectedStock = null;
    },
  },
});
export const {
  addToWatchlist,
  removeFromWatchlist,
  selectStock,
  clearSelection,
} = watchlistSlice.actions;
export default watchlistSlice.reducer;
