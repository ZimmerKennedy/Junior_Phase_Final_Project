import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addStudentAsync } from "./studentSlice";

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

export const editStudentAsync = createAsyncThunk('edit/student', async(student) =>{
    const {id, firstName, lastName, email} = student;
    const updateStudent = {firstName, lastName, email};
    const { data } = await axios.put(`http://localhost:3000/api/students/${id}`, updateStudent)
    return data;
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
        builder.addCase(addStudentAsync.fulfilled, (state,action) =>{
            return action.payload
        })
    },
});

export const selectAStudent = (state) => {
    return state.aStudent
};

export default aStudent.reducer