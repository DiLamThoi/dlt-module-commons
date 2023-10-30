import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const jobSlice = createSlice({
    name: 'Job',
    initialState,
    reducers: {
        createJob: (state, action) => {
            const { id, data } = action.payload;
            state[id] = data;
            return state;
        },
    },
});

export const {
    createJob,
} = jobSlice.actions;

const jobReducer = jobSlice.reducer;

export default jobReducer;
