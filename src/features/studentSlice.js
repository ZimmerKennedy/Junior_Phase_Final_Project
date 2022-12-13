import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchStudentAsync = createAsyncThunk('allStudent', async () => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/students`)
        return data;
    } catch (error) {
        console.log(error);
    }
});

const studentSlice = createSlice({
    name: 'students',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStudentAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectStudent = (state) => {
    console.log(`state.campus`, state.student)
    return state.student
};

export default studentSlice.reducer

