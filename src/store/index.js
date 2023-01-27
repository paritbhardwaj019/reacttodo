import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux";

const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export default store;
