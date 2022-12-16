import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1 STUDENT
export const fetchAStudentAsync = createAsyncThunk('aStudent', async(id) =>{
    try{
        const {data} = await axios.get(`http://localhost:3000/api/students/${id}`)
        return data;
    } catch (error){
        console.log(error)
    }
})

// DELETE A STUDENT
export const deleteStudentAsync = createAsyncThunk('delete/student', async(id) =>{
    const { data } = await axios.delete(`http://localhost:3000/api/students/${id}/`);
    return data
})

// 1 STUDENT
export const aStudent = createSlice({
    name:"aStudent",
    initialState: {},
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchAStudentAsync.fulfilled,(state,action) =>{
            return action.payload
        });
        builder.addCase(deleteStudentAsync.fulfilled, (state,action) => {
            return action.payload
        });
    },
});

export const selectAStudent = (state) => {
    return state.aStudent
};

export default aStudent.reducer