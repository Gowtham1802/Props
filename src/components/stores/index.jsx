import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../redux/reducer/counterSlice";

export const stores = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
