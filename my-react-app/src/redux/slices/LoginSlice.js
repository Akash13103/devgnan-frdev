import { createSlice } from "@reduxjs/toolkit";
export const LoginSlice = createSlice({
  name: "LoginForm",
  initialState: {
    userName: "",
    password: "",
  },
  reducers: {
    // TODO: Create increment function
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },

    // TODO: Create decrement function
    updatePassword: (state, action) => {
      state.password = action.payload;
    },

    // TODO: Create reset function
  },
});
export const { updatePassword, updateUserName } = LoginSlice.actions;
export default LoginSlice.reducer;
