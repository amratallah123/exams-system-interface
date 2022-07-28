import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "../redux/indexSlicer";
import scoreReducer from "../redux/scoreSlicer";

export const store = configureStore({
  reducer: {
    index: indexReducer,
    score: scoreReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
