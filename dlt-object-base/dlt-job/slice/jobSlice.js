import { createSlice } from '@reduxjs/toolkit';
import initialObjectState from '@dlt-object-base/dlt-base/object/initialObjectState';

const jobSlice = createSlice({
    name: 'Job',
    initialState: initialObjectState,
    reducers: {
        createJob: (state, action) => {
            const { id, data } = action.payload;
            if (!state.items[id]) {
                state.items[id] = data;
                state.itemIds.push(id);
            }
            return state;
        },
    },
});

export const {
    createJob,
} = jobSlice.actions;

const jobReducer = jobSlice.reducer;

export default jobReducer;
