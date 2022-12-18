import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ALL CAMPUS
export const fetchCampusAsync = createAsyncThunk('allCampus', async () => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/campus`)
        return data;
    } catch (error) {
        console.log(error);
    }
});
// ADD A CAMPUS
export const addCampusAsync = createAsyncThunk('campus/addCampus',
    async ({ name, address, description }) => {
        try {
            const { data } = await axios.post('http://localhost:3000/api/campus', {
                name,
                address,
                description
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    });

// ALL CAMPUS
export const campusSlice = createSlice({
    name: 'campuses',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        });

        // ADD CAMPUS
        builder.addCase(addCampusAsync.fulfilled, (state, action) => {
            state.push(action.payload)

        })
    },
});

// export const { addUser } = campusSlice.actions

export const selectCampuses = (state) => {
    return state.campus
};

export default campusSlice.reducer

