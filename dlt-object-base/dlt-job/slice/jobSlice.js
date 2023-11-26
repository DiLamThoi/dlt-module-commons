import { createSlice } from '@reduxjs/toolkit';
import initialObjectState from '@dlt-object-base/dlt-base/object/initialObjectState';
import StoreConfig from '@dlt-object-base/storeConfig';

const jobSlice = createSlice({
    name: StoreConfig.job,
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
