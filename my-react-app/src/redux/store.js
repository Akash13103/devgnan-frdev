import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slices/LoginSlice";

// Step 7.2: Create store with all slices
export const store = configureStore({
  reducer: {
    LoginForm: LoginSlice,
  },
});

export default store;
