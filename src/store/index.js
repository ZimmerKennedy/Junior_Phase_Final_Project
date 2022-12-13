import { configureStore } from "@reduxjs/toolkit";
import campusReducer from "../features/campusSlice";


const store = configureStore({
  campusReducer: campusReducer
  // studentReducer:
});

export default store;