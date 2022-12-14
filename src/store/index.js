import { configureStore } from "@reduxjs/toolkit";
import campusReducer from "../features/campusSlice";
import studentReducer from "../features/studentSlice"
import aCampusReducer from "../features/aCampusSlice"
import aStudentReducer from "../features/aStudentSlice"


const store = configureStore({
  reducer: {
    campus: campusReducer,
    student: studentReducer,
    aCampus: aCampusReducer,
    aStudent: aStudentReducer,
  }
});

export default store;