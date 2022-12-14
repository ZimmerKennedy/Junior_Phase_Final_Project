import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1 STUDENT
export const fetchAStudentAsync = createAsyncThunk('aStudent', async(id) =>{
    try{
        const {data} = await axios.get(`http://localhost:3000/api/students/${id}`)
        console.log(`Hi im data from aStudentSlice`, data )
        return data;
    } catch (error){
        console.log(error)
    }
})



// 1 STUDENT
export const aStudent = createSlice({
    name:"aStudent",
    initialState: {},
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchAStudentAsync.fulfilled,(state,action) =>{
            return action.payload
        })
    }
})

export const selectAStudent = (state) => {
   console.log(`selectAStudent from aStudentSlice`, state.aStudent)
    return state.aStudent
};

export default aStudent.reducer