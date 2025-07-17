import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isLoggedIn: false,
  funds: 0,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // TODO: Simple login (just saves user info)
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    // TODO: Simple logout (clears user info)
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.funds = 0;
    },

    // TODO: Update funds
    setFunds: (state, action) => {
      state.funds = action.payload;
    },
  },
});
export const { loginUser, logoutUser, setFunds } = userSlice.actions;
export default userSlice.reducer;
