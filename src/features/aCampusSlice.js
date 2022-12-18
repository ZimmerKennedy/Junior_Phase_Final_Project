import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1 CAMPUS
export const fetchACampusAsync = createAsyncThunk('aCampus', async (id) => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/campus/${id}`)
        return data;
    } catch (error) {
        console.log(error)
    }
})

// DELETE A CAMPUS
export const deleteCampusAsync = createAsyncThunk('delete/campus', async (id) => {
    const { data } = await axios.delete(`http://localhost:3000/api/campus/${id}/`);
    return data
})

// EDIT A CAMPUS

export const editCampusAsync = createAsyncThunk('edit/campus', async (campus) => {
    const { id, name, address, description } = campus;
    const updateCampus = { name, address, description };
    const { data } = await axios.put(`http://localhost:3000/api/campus/${id}`, updateCampus)
    return data;
})

// 1 CAMPUS
export const aCampus = createSlice({
    name: "aCampus",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchACampusAsync.fulfilled, (state, action) => {
            return action.payload
        });
        builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
            return action.payload
        });
        builder.addCase(editCampusAsync.fulfilled, (state, action) => {
            return action.payload
        });
    },
});

export const selectACampus = (state) => {
    return state.aCampus
};

export default aCampus.reducer