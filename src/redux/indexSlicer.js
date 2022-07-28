import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
};

export const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    incrementIndex: (state) => {
      state.index += 1;
    },
    clearIndex: (state) => {
      state.index = 0;
    },
  },
});

export const { incrementIndex, clearIndex } = indexSlice.actions;

export default indexSlice.reducer;
