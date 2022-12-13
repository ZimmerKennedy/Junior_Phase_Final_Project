import { configureStore } from "@reduxjs/toolkit";
import campusReducer from "../features/campusSlice";
import studentReducer from "../features/studentSlice"


const store = configureStore({
  reducer: {
    campus: campusReducer,
    student: studentReducer,
  }
});

export default store;