import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const handleAuth = createAsyncThunk(
  "loginForm/Authentication",
  async ({ userName, password }) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        email: userName,
        password: password,
      }
    );
    return response;
  }
);
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
  isLoading: false,
  error: null,
  responseData: [],
  extraReducers: (builder) => {
    builder
      .addCase(handleAuth.pending, (globalState) => {
        globalState.isLoading = true;
        globalState.error = null;
      })
      .addCase(handleAuth.fulfilled, (globalState, action) => {
        globalState.isLoading = false;
        globalState.responseData = action.payload.data;
      });
  },
});
export const { updatePassword, updateUserName } = LoginSlice.actions;
export default LoginSlice.reducer;
