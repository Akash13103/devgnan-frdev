import { createSlice } from "@reduxjs/toolkit";
export const updateDataSlice = createSlice({
  name: "updateData",
  initialState: {
    count: 1,
    dataSet:[]
  },
  reducers: {
    // TODO: Create increment function
    dataUpdate:(state,action)=>{
        state.dataSet=action.payload;
    },
  },
});
export const { dataUpdate } = updateDataSlice.actions;
export default updateDataSlice.reducer;