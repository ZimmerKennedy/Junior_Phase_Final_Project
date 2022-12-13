import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusAsync = createAsyncThunk('allCampus', async() =>{
    try{
        const { data } = await axios.get(`/api/campus`)
        return data
    } catch (error){
        console.log(error);
    }
});

const campusSlice = createSlice({
    name:'campuses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCampusAsync.fulfilled, (state,action) =>{
            return action.payload;
        });
    },
});

export const selectCampuses = (state) =>{
    return state.campusSlice
};

export default campusSlice.reducer

// import {createSlice} from '@reduxjs/toolkit'

// export const campusSlice = createSlice({
//     name:'campuses',
//     initialState: [],
//     reducers:{}
// })