import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {};

const jobSlice = createSlice({
    name: "Job",
    initialState,
    reducers: {
        getJob: (state, action) => {
            const { id } = action.payload;
            return state[id];
        }
    }
})

export const {
    getJob,
} = jobSlice.actions

export default jobSlice.reducer;