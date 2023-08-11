import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const jobSlice = createSlice({
    name: "Job",
    initialState,
    reducers: {
        addJob: (state, action) => {
            const { id, data } = action.payload;
            state[id] = data;
            return state;
        }
    }
});

export const {
    addJob,
} = jobSlice.actions

const jobReducer = jobSlice.reducer;

export default jobReducer;
