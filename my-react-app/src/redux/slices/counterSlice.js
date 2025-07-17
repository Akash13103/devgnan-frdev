import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
  },
  reducers: {
    // TODO: Create increment function
    increment: (state, action) => {
      // TODO: Add 1 to state.value
      state.count += 1;
    },

    // TODO: Create decrement function
    decrement: (state, action) => {
      // TODO: Subtract 1 from state.value
      state.count -= 1;
    },

    // TODO: Create reset function
    reset: (state) => {
      // TODO: Set state.value back to 0
      state.count = 0;
    },
  },
});
export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
