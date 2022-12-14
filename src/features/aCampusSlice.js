import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1 CAMPUS
export const fetchACampusAsync = createAsyncThunk('aCampus', async(id) =>{
    try{
        const {data} = await axios.get(`http://localhost:3000/api/campus/${id}`)
        console.log(`Hi im data from aCampusSlice`, data )
        return data;
    } catch (error){
        console.log(error)
    }
})



// 1 CAMPUS
export const aCampus = createSlice({
    name:"aCampus",
    initialState: {},
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchACampusAsync.fulfilled,(state,action) =>{
            return action.payload
        })
    }
})

export const selectACampus = (state) => {
   console.log(`selectACampus from aCampusSlice`, state.aCampus)
    return state.aCampus
};

export default aCampus.reducer