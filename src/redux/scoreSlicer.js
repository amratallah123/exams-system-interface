import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 10;
    },
    clearScore: (state) => {
      state.score = 0;
    },
  },
});

export const { incrementScore, clearScore } = scoreSlice.actions;

export default scoreSlice.reducer;
