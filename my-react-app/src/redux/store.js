import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import portfolioSlice from "./Slices/portfolioSlice";
import watchlistSlice from "./Slices/watchlistSlice";
import CounterSlice from "./Slices/CounterSlice";
import updateDataSlice from "./Slices/updateDataSlice";
import LoginSlice from "./Slices/LoginSlice";

// Step 7.2: Create store with all slices
export const store = configureStore({
  reducer: {
    user: userSlice,
    portfolio: portfolioSlice,
    watchlist: watchlistSlice,
    counter: CounterSlice,
    updateData: updateDataSlice,
    LoginForm: LoginSlice,
  },
});

export default store;
