import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCampusAsync = createAsyncThunk('allCampus', async () => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/campus`)
        return data;
    } catch (error) {
        console.log(error);
    }
});

const campusSlice = createSlice({
    name: 'campuses',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectCampuses = (state) => {
    console.log(`state.campus`, state.campus)
    return state.campus
};

export default campusSlice.reducer

