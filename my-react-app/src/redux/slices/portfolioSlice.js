import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  stocks: [],
  totalValue: 0,
  todayPnL: 0,
};
const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    // TODO: Add stock to portfolio
    addStock: (state, action) => {
      state.stocks.push(action.payload);
    },

    // TODO: Remove stock from portfolio
    removeStock: (state, action) => {
      state.stocks = state.stocks.filter(
        (stock) => stock.id !== action.payload
      );
    },

    // TODO: Update portfolio value
    updateValue: (state, action) => {
      state.totalValue = action.payload;
    },

    // TODO: Update today's profit/loss
    updatePnL: (state, action) => {
      state.todayPnL = action.payload;
    },
  },
});
export const { addStock, removeStock, updateValue, updatePnL } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
