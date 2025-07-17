import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import portfolioSlice from "./slices/portfolioSlice";
import watchlistSlice from "./slices/watchlistSlice";
import counterSlice from "./slices/counterSlice";

// Step 7.2: Create store with all slices
export const store = configureStore({
  reducer: {
    user: userSlice,
    portfolio: portfolioSlice,
    watchlist: watchlistSlice,
    counter: counterSlice,
  },
});

export default store;
