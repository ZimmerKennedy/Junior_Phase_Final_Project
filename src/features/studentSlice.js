import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// ALL STUDENTS
export const fetchStudentAsync = createAsyncThunk('allStudent', async () => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/students`)
        return data;
    } catch (error) {
        console.log(error);
    }
});
// ADD A STUDENT
export const addStudentAsync = createAsyncThunk('students/addStudent',
    async ({ firstName, lastName }) => {
        console.log(`addStudentThunk`, firstName, lastName)
        try{
            const { data } = await axios.post('http://localhost:3000/api/students',{
                firstName,
                lastName,
                
            });
                return data;
            } catch(error){
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
        
        builder.addCase(addStudentAsync.fulfilled, (state, action) => {
            state.push(action.payload)

        })
    },
});

export const selectStudent = (state) => {
    return state.student
};

export default studentSlice.reducer

