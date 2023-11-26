import { createSlice } from '@reduxjs/toolkit';
import initialObjectState from '@dlt-object-base/dlt-base/object/initialObjectState';
import StoreConfig from '@dlt-object-base/storeConfig';

const employerSlice = createSlice({
    name: StoreConfig.employer,
    initialState: initialObjectState,
    reducers: {
        createEmployer: (state, action) => {
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
    createEmployer,
} = employerSlice.actions;

const employerReducer = employerSlice.reducer;

export default employerReducer;
